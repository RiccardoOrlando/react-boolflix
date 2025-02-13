import { createContext, useContext,useState } from "react";
// 1. Creare il contesto
const AppDataContext = createContext();

// 2. Definire un custom provider (colui che trasmette i dati da condividere)
const AppDataProvider = ({ children }) => {
    // Definire lo stato da condividere
const [movies, setMovies] = useState([]);
const [series, setSeries] = useState([]);

    return (
        <AppDataContext.Provider value={{ movies, setMovies, series, setSeries }}>
            {children}
        </AppDataContext.Provider>
    );
}

// 3 creare un custom hook (una funzione) per consumare il contesto
function UseAppDataContext() {
const context = useContext(AppDataContext);
// restituisce i dati dal contesto
return context;
}


// 4. Esportare il provider e il custom hook
export { AppDataProvider, UseAppDataContext };
