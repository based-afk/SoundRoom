// Mock Player Service implementation (JavaScript)
export const createPlayerService = (onTimeUpdate, onDurationUpdate) => {
  const audio = new Audio();
  audio.addEventListener("timeupdate", () => {
    onTimeUpdate(audio.currentTime);
  });
  audio.addEventListener("loadedmetadata", () => {
    onDurationUpdate(audio.duration);
  });
  let currentTrack = null;
  return {
    play: (track) => {
      if (!currentTrack || currentTrack.id !== track.id) {
        currentTrack = track;
        audio.src = track.audioUrl;
      }

      audio.play();
    },
    pause: () => {
      audio.pause();
    },
    resume: () => {
      audio.play();
    },
    next: () => console.info("Mock next"),
    previous: () => console.info("Mock previous"),
    seek: (seconds) => {
      audio.currentTime = seconds;
    },
  };
};
