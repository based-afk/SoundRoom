import { ArrowRight, Play } from "lucide-react";
import { TrackList } from "../components/TrackList";

export function Home({ tracks, playlists, onPlay, onLike, onDownload }) {
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">GOOD EVENING</span>
          <h1>
            Find your next
            <br />
            <em>favorite sound.</em>
          </h1>
          <p>A small, personal space for the music that keeps you moving.</p>
        </div>
        <button className="primary-button" onClick={() => onPlay(tracks[0])}>
          <Play size={17} fill="currentColor" /> Play something
        </button>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <h2>Made for your day</h2>
          <button className="text-button">
            View all <ArrowRight size={15} />
          </button>
        </div>
        <div className="playlist-grid">
          {playlists.map((playlist) => (
            <button className="playlist-card" key={playlist.id}>
              <img src={playlist.artwork} />
              <strong>{playlist.name}</strong>
              <span>{playlist.description}</span>
            </button>
          ))}
        </div>
      </section>
      <section className="content-section">
        <div className="section-heading">
          <h2>Recently played</h2>
        </div>
        <TrackList
          tracks={tracks.slice(0, 6)}
          onPlay={onPlay}
          onLike={onLike}
          onDownload={onDownload}
        />
      </section>
    </>
  );
}
