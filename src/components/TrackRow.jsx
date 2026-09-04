import { Check, Download, Heart, MoreHorizontal, Play } from "lucide-react";

export function TrackRow({ track, index, onPlay, onLike, onDownload }) {
  return (
    <div className="track-row">
      <span className="row-number">{index + 1}</span>

      <button
        className="row-play"
        onClick={() => onPlay(track)}
        aria-label={`Play ${track.title}`}
      >
        <Play size={14} fill="currentColor" />
      </button>

      <img
        className="track-art"
        src={track.album.artwork}
        alt={`${track.album.title} artwork`}
      />

      <div className="track-copy">
        <strong>{track.title}</strong>
        <small>{track.artist.name}</small>
      </div>

      <span className="album-name">{track.album.title}</span>

      <button
        className={`row-action ${track.liked ? "liked" : ""}`}
        onClick={() => onLike(track)}
        aria-label="Like"
      >
        <Heart size={17} fill={track.liked ? "currentColor" : "none"} />
      </button>

      <button
        className={`row-action ${track.downloaded ? "downloaded" : ""}`}
        onClick={() => onDownload(track)}
        aria-label="Download"
      >
        {track.downloaded ? <Check size={17} /> : <Download size={17} />}
      </button>

      <span className="duration">
        {Math.floor(track.duration / 60)}:
        {String(track.duration % 60).padStart(2, "0")}
      </span>

      <button className="row-action more" aria-label="More options">
        <MoreHorizontal size={18} />
      </button>
    </div>
  );
}
