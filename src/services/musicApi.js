// Mock Music API implementation (JavaScript)
export const createMusicApi = (tracks) => ({
  searchTracks: (query) =>
    tracks.filter((track) =>
      `${track.title} ${track.artist.name} ${track.album.title}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    ),
  getLikedTracks: () => tracks.filter((track) => track.liked),
  getDownloadedTracks: () => tracks.filter((track) => track.downloaded),
  likeTrack: (id) => {
    const track = tracks.find((item) => item.id === id);
    if (track) track.liked = true;
  },
  unlikeTrack: (id) => {
    const track = tracks.find((item) => item.id === id);
    if (track) track.liked = false;
  },
});
export const getTracks = async () => {
  const response = await fetch("http://localhost:3000/tracks");
  const data = await response.json();

  return data.result;
};
