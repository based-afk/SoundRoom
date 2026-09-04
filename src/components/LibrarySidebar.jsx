import { Plus, Sparkles, Heart, Download, ListMusic } from "lucide-react";
export function LibrarySidebar({ page, onNavigate }) {
  return (
    <aside className="sidebar library-sidebar">
      <div className="sidebar-heading">
        <h2>Your Library</h2>

        <button className="icon-button">
          <Plus size={18} />
        </button>
      </div>

      <div className="sidebar-label">
        <span>YOUR COLLECTION</span>
        <Sparkles size={14} />
      </div>

      <button
        className={`library-link ${page === "liked" ? "active" : ""}`}
        onClick={() => onNavigate("liked")}
      >
        <Heart size={18} fill="currentColor" />
        Liked Songs
        <small>12</small>
      </button>

      <button
        className={`library-link ${page === "downloads" ? "active" : ""}`}
        onClick={() => onNavigate("downloads")}
      >
        <Download size={18} />
        Downloads
        <small>4</small>
      </button>

      <div className="sidebar-label playlist-label">
        <span>PLAYLISTS</span>
        <ListMusic size={14} />
      </div>

      {["Late Night Drives", "Soft Focus", "Weekend Energy"].map((name, i) => (
        <button
          className="playlist-link"
          key={name}
          onClick={() => onNavigate(`playlist-${i + 1}`)}
        >
          <span
            className="playlist-dot"
            style={{
              background: ["#d7a86e", "#789b8e", "#bd7181"][i],
            }}
          />
          {name}
        </button>
      ))}
    </aside>
  );
}
