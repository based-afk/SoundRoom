import { TrackList } from '../components/TrackList';

export function Library({ tracks, onPlay, onLike, onDownload }) {
  return (
    <>
      <div className="page-intro">
        <span className="eyebrow">YOUR COLLECTION</span>
        <h1>Library</h1>
        <p>The songs you’ve kept close.</p>
      </div>
      <div className="tabs">
        <span className="selected">Liked songs</span>
        <span>Playlists</span>
        <span>Albums</span>
      </div>
      <TrackList tracks={tracks} onPlay={onPlay} onLike={onLike} onDownload={onDownload} />
    </>
  );
}
