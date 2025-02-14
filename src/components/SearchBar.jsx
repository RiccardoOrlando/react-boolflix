import { useState } from "react";
import { UseAppDataContext } from "../contexts/AppDataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies, setSeries } = UseAppDataContext();

  const handleSearch = (e) => {
    e.preventDefault();

    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "e65f32fe1a916ada42a41dca681dd584",
          language: "it-IT",
          query: search,
          include_adult: true,
        },
      })
      .then((response) => setMovies(response.data.results));

    axios
      .get("https://api.themoviedb.org/3/search/tv", {
        params: {
          api_key: "e65f32fe1a916ada42a41dca681dd584",
          language: "it-IT",
          query: search,
          include_adult: true,
        },
      })
      .then((response) => setSeries(response.data.results));
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="flex items-center justify-between gap-4">
        <input
          className="bg-gray-700 p-2 rounded text-black border-2 border-red-600 text-white"
          type="search"
          placeholder="Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="bg-red-500 p-2 rounded">
          <button type="submit">Cerca</button>
        </div>
      </div>
    </form>
  );
}
