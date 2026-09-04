import { Home, Library, Search, UserRound } from "lucide-react";

export function Navbar({ query, onSearch, onNavigate }) {
  return (
    <header className="navbar">
      <button className="brand" onClick={() => onNavigate("home")}>
        <span className="brand-mark">â™ª</span>
        <span>soundroom</span>
      </button>
      <nav>
        <button onClick={() => onNavigate("home")}>
          <Home size={18} /> Home
        </button>
        <button onClick={() => onNavigate("library")}>
          <Library size={18} /> Library
        </button>
      </nav>
      <label className="search">
        <Search size={18} />
        <input
          value={query}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="What do you want to play?"
        />
      </label>
      <button className="profile">
        <UserRound size={17} />
        <span>Guest</span>
      </button>
    </header>
  );
}
