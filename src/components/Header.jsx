import SearchBar from "./SearchBar";

export function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src="../img/fontbolt.png" alt="" className="w-35 p-4"/>
        <SearchBar />
      </div>
    </header>
  );
}
