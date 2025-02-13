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
        },
      })
      .then((response) => setMovies(response.data.results));

  axios
  .get("https://api.themoviedb.org/3/search/tv", {
    params: {
      api_key: "e65f32fe1a916ada42a41dca681dd584",
      language: "it-IT",
      query: search,
    },
  })
  .then((response) => setSeries(response.data.results));
};


  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Cerca..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
