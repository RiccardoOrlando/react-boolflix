import { Header } from "./components/Header";
import Main from "./components/Main";
// importo dei contesti
import { AppDataProvider } from "./contexts/AppDataContext";

export default function App() {
  return(
    <AppDataProvider>
      <Header />
      <Main />
    </AppDataProvider>
  )
}