 import React from 'react';
import { TrackRow } from './TrackRow';

/**
 * TrackList component renders a list of tracks.
 * @param {Object[]} tracks - Array of track objects.
 * @param {function} onPlay - Callback when a track is played.
 * @param {function} onLike - Callback when a track is liked.
 * @param {function} onDownload - Callback when a track is downloaded.
 */
export function TrackList({ tracks, onPlay, onLike, onDownload }) {
  return (
    <div className="track-list">
      <div className="track-header">
        <span>#</span>
        <span>TRACK</span>
        <span>ALBUM</span>
        <span>ACTIONS</span>
        <span>TIME</span>
      </div>
      {tracks.map((track, index) => (
        <TrackRow
          key={track.id}
          track={track}
          index={index}
          onPlay={onPlay}
          onLike={onLike}
          onDownload={onDownload}
        />
      ))}
    </div>
  );
}
