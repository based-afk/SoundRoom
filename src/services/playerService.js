// Mock Player Service implementation (JavaScript)
export const createPlayerService = (
  onTimeUpdate,
  onDurationUpdate,
  onEnded,
) => {
  const audio = new Audio();
  audio.addEventListener("error", () => {
    console.error("Audio failed to load");
  });
  audio.addEventListener("timeupdate", () => {
    onTimeUpdate(audio.currentTime);
  });
  audio.addEventListener("loadedmetadata", () => {
    onDurationUpdate(audio.duration);
  });
  audio.addEventListener("ended", () => {
    onEnded();
  });
  let currentTrack = null;
  return {
    play: (track) => {
      if (!currentTrack || currentTrack.id !== track.id) {
        currentTrack = track;
        audio.src = track.audioUrl;
      }

      audio.play().catch((error) => {
        console.error("Unable to play audio", error);
      });
    },
    setVolume: (volume) => {
      audio.volume = volume / 100;
    },
    pause: () => {
      audio.pause();
    },
    resume: () => {
      audio.play();
    },
    seek: (seconds) => {
      audio.currentTime = seconds;
    },
  };
};
