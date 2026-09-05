import { Rewind, Play, Pause, FastForward, Volume } from "lucide-react";

/**
 * Bottom music player UI.
 *
 * Props:
 * - track: { artwork: string, title: string, artist: string }
 * - isPlaying: boolean
 * - currentTime: number (seconds)
 * - duration: number (seconds)
 * - volume: number (0-100)
 * - onPrev: () => void
 * - onPlayPause: () => void
 * - onNext: () => void
 * - onSeek: (time: number) => void
 * - onVolumeChange: (vol: number) => void
 */
export function MusicPlayer({
  track = { artwork: "", title: "", artist: "" },
  isPlaying = false,
  currentTime = 0,
  duration = 0,
  volume = 100,
  onPrev = () => {},
  onPlayPause = () => {},
  onNext = () => {},
  onSeek = () => {},
  onVolumeChange = () => {},
}) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    onSeek(newTime);
  };

  const handleVolume = (e) => {
    const newVol = Number(e.target.value);
    onVolumeChange(newVol);
  };

  return (
    <div className="player">
      {/* Now playing info */}
      <div className="now-playing">
        <img src={track.album.artwork} alt={`${track.title} artwork`} />
        <div>
          <strong>{track.album.title}</strong>
          <span>{track.artist.name}</span>
        </div>
      </div>

      {/* Playback controls and progress */}
      <div className="player-controls">
        <div className="control-buttons">
          <button
            className="icon-button"
            onClick={onPrev}
            aria-label="Previous"
          >
            <Rewind size={20} />
          </button>
          <button
            className="icon-button play-button"
            onClick={onPlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="icon-button" onClick={onNext} aria-label="Next">
            <FastForward size={20} />
          </button>
        </div>
        <div className="progress-line">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Volume control */}
      <div className="volume">
        <Volume size={16} />
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}
