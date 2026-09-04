import React from 'react';
import { ListMusic, MoreHorizontal, X } from 'lucide-react';

export function QueueSidebar({ queue, onPlay }) {
  return (
    <aside className="sidebar queue-sidebar">
      <div className="sidebar-heading">
        <div>
          <span className="eyebrow">PLAYING NEXT</span>
          <h2>Queue</h2>
        </div>
        <button className="icon-button">
          <X size={17} />
        </button>
      </div>
      {queue.current && (
        <div className="queue-current">
          <img src={queue.current.album.artwork} alt="Album art" />
          <div>
            <strong>{queue.current.title}</strong>
            <span>{queue.current.artist.name}</span>
          </div>
          <MoreHorizontal size={18} />
        </div>
      )}
      <div className="queue-section">
        <span className="eyebrow">UP NEXT</span>
        {queue.upcoming.map((track, index) => (
          <button
            className="queue-row"
            key={track.id}
            onClick={() => onPlay(track)}
          >
            <span className="queue-index">{index + 1}</span>
            <img src={track.album.artwork} alt="Album art" />
            <span className="track-copy">
              <strong>{track.title}</strong>
              <small>{track.artist.name}</small>
            </span>
            <span className="duration">
              {Math.floor(track.duration / 60)}:{String(track.duration % 60).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>
      {queue.upcoming.length === 0 && (
        <div className="queue-empty">
          <ListMusic size={22} />
          <span>Queue is ready when you are.</span>
        </div>
      )}
    </aside>
  );
}


