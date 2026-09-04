import { TrackList } from '../components/TrackList';

export function Downloads({ tracks, onPlay, onLike, onDownload }) {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">OFFLINE MODE</span>
        <h1>Downloads</h1>
        <p>Your music, wherever the day takes you.</p>
      </div>
      <TrackList tracks={tracks} onPlay={onPlay} onLike={onLike} onDownload={onDownload} />
    </>
  );
}
