import { useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { LibrarySidebar } from "./components/LibrarySidebar";
import { QueueSidebar } from "./components/QueueSidebar";
import { MusicPlayer } from "./components/MusicPlayer";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Downloads } from "./pages/Downloads";
import { TrackList } from "./components/TrackList";
import { createMusicApi } from "./services/musicApi";
import { createPlayerService } from "./services/playerService";
import { playlists, tracks as initialTracks } from "./data";

export default function App() {
  const [, setRefresh] = useState(0);
  const [page, setPage] = useState("home");
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(initialTracks[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const api = useMemo(() => createMusicApi(initialTracks), []);
  const playerService = useMemo(
    () => createPlayerService(setProgress, setDuration),
    [],
  );

  const visibleTracks = useMemo(() => {
    if (query) return api.searchTracks(query);
    if (page === "liked") return api.getLikedTracks();
    if (page === "downloads") return api.getDownloadedTracks();
    if (page.startsWith("playlist-")) {
      const idx = Number(page.slice(-1)) - 1;
      return playlists[idx]?.tracks ?? [];
    }
    return initialTracks;
  }, [query, page]);

  const upcoming = visibleTracks.filter((t) => t.id !== current.id);

  const play = (track) => {
    setCurrent(track);
    setPlaying(true);
    setProgress(0);
    playerService.play(track);
  };

  const toggleLike = (track) => {
    if (track.liked) {
      api.unlikeTrack(track.id);
    } else {
      api.likeTrack(track.id);
    }
    setRefresh((v) => v + 1);
  };

  const toggleDownload = (track) => {
    track.downloaded = !track.downloaded;
    setRefresh((v) => v + 1);
  };

  const next = () => {
    const index = initialTracks.findIndex((t) => t.id === current.id);
    play(initialTracks[(index + 1) % initialTracks.length]);
    playerService.next();
  };

  const previous = () => {
    const index = initialTracks.findIndex((t) => t.id === current.id);
    play(
      initialTracks[(index - 1 + initialTracks.length) % initialTracks.length],
    );
    playerService.previous();
  };

  const content = query ? (
    <>
      <div className="page-intro compact">
        <span className="eyebrow">SEARCH RESULTS</span>
        <h1>Results for “{query}”</h1>
      </div>
      <TrackList
        tracks={visibleTracks}
        onPlay={play}
        onLike={toggleLike}
        onDownload={toggleDownload}
      />
    </>
  ) : page === "home" ? (
    <Home
      tracks={initialTracks}
      playlists={playlists}
      onPlay={play}
      onLike={toggleLike}
      onDownload={toggleDownload}
    />
  ) : page === "library" || page === "liked" ? (
    <Library
      tracks={visibleTracks}
      onPlay={play}
      onLike={toggleLike}
      onDownload={toggleDownload}
    />
  ) : (
    <Downloads
      tracks={visibleTracks}
      onPlay={play}
      onLike={toggleLike}
      onDownload={toggleDownload}
    />
  );

  return (
    <div className="app-shell">
      <Navbar
        query={query}
        onSearch={setQuery}
        onNavigate={(nextPage) => {
          setQuery("");
          setPage(nextPage);
        }}
      />
      <div className="workspace">
        <LibrarySidebar
          page={page}
          onNavigate={(nextPage) => {
            setQuery("");
            setPage(nextPage);
          }}
        />
        <main className="main-content">{content}</main>
        <QueueSidebar
          queue={{ current, upcoming: upcoming.slice(0, 5) }}
          onPlay={play}
        />
      </div>
      <MusicPlayer
        track={current}
        isPlaying={playing}
        currentTime={progress}
        duration={duration}
        onPlayPause={() => {
          if (playing) {
            setPlaying(false);
            playerService.pause();
          } else {
            setPlaying(true);
            playerService.play(current);
          }
        }}
        onPrev={previous}
        onNext={next}
        onSeek={(value) => {
          setProgress(value);
          playerService.seek(value);
        }}
      />
    </div>
  );
}
