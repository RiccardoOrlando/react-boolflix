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

  const FlagLanguage = ( language ) => {
    const FlagUrl = FlagLanguages[language] || "https://flagcdn.com/w40/un.png";
    return <img src={FlagUrl} alt={language} width="25" height="15" />;
  };

  return (
    <main>
      <>
      <h2>Contenuto principale</h2>
      <ul>
          <h3>MOVIES</h3>
          {movies.map((movie) => (
            <li key={movie.id}>
            <div>
              <div><img src="" alt="" /></div>
              <div>{movie.title}</div>
              <div>{movie.original_title}</div>
              <div>lingua: {FlagLanguage(movie.original_language)}({movie.original_language})</div>
              <div>{movie.vote_average}</div>
              <br />
            </div>
            </li>
          ))}
          </ul>
        <ul>
        
          <h3>SERIES</h3>
          {series.map((serie) => (
            <li key={serie.id}>
            <div>
              <p>{serie.name}</p>
            </div>
            </li>
          ))}
        </ul>
      </>
    </main>
  );
}
