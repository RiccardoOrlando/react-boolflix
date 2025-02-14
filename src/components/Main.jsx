import { UseAppDataContext } from "../contexts/AppDataContext";

const FlagLanguages = {
  en: "https://flagcdn.com/w40/gb.png",
  it: "https://flagcdn.com/w40/it.png",
  fr: "https://flagcdn.com/w40/fr.png",
  es: "https://flagcdn.com/w40/es.png",
  de: "https://flagcdn.com/w40/de.png",
  ja: "https://flagcdn.com/w40/gp.png",
  ru: "https://flagcdn.com/w40/ru.png",
  zh: "https://flagcdn.com/w40/cn.png",
};

export default function Main() {
  const { movies, series } = UseAppDataContext();

  const FlagLanguage = (language) => {
    const FlagUrl = FlagLanguages[language] || "https://flagcdn.com/w40/un.png";
    return (
      <img
        src={FlagUrl}
        alt={language}
        width="25"
        height="15"
        className="inline-block"
      />
    );
  };

  const getStarRating = (rating) => Math.ceil(rating / 2);

  return (
    <main>
      <>
        <div className="flex items-center justify-center text-4xl font-bold">
          <h1>Contenuto principale</h1>
        </div>
        <div>
        <h3 className="text-3xl font-bold flex justify-center py-6">MOVIES</h3>
          <ul className="container mx-auto mt-4 grid grid-cols-5 gap-4 wrap">
            {movies.map((movie) => (
              <div className="card col-span-1 relative group">
              <li key={movie.id}>
                <div className="relative">
                  <img
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    alt=""
                    className="w-full h-auto"
                  />
                  {/* Informazioni che si mostrano con hover */}
                  <div className="info absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-lg font-bold">{movie.title}</div>
                    <div>{movie.original_title}</div>
                    <div className="inline-block">
                      Lingua: {FlagLanguage(movie.original_language)} (
                      {movie.original_language})
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`${
                            index < getStarRating(movie.vote_average) ? "fas" : "far"
                          } fa-star text-yellow-400`}
                        ></i>
                      ))}
                      <span className="ml-2 text-gray-400">({movie.vote_average})</span>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            ))}
          </ul>
        </div>
        <div>
        <h3 className="text-3xl font-bold flex justify-center py-6">SERIE</h3>
        <ul className="container mx-auto mt-4 grid grid-cols-5 gap-4 wrap">
            {series.map((serie) => (
              <div className="card col-span-1">
                <li key={serie.id}>
                  <div>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/w342/${serie.poster_path}`}
                        alt=""
                      />
                    </div>
                    <div>{serie.title}</div>
                    <div>{serie.original_title}</div>
                    <div className="inline-block">
                      lingua: {FlagLanguage(serie.original_language)}(
                      {serie.original_language})
                    </div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, index) => (
                        <i
                          key={index}
                          className={`${
                            index < getStarRating(serie.vote_average)
                              ? "fas"
                              : "far"
                          } fa-star text-yellow-400`}
                        ></i>
                      ))}
                      <span className="ml-2 text-gray-600">
                        ({serie.vote_average})
                      </span>
                    </div>
                    <div>{serie.vote_average}</div>
                    <br />
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </>
    </main>
  );
}
