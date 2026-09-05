// Data for the music player (JavaScript version)
// No TypeScript types needed at runtime

const colors = [
  "#d7a86e",
  "#6d86c8",
  "#c76d73",
  "#7b9b76",
  "#a879a9",
  "#ce8d58",
  "#6e9eaa",
  "#b27e64",
];
const raw = [
  [
    "Midnight City",
    "M83",
    "Hurry Up, We’re Dreaming",
    "/audio/congratulations.mp3",
  ],
  ["Sunset Lover", "Petit Biscuit", "Presence", "/audio/HeatWaves.mp3"],
  [
    "Sweet Disposition",
    "The Temper Trap",
    "Conditions",
    "/audio/taki_taki.mp3",
  ],
  [
    "The Less I Know The Better",
    "Tame Impala",
    "Currents",
    "/audio/theLessIKnowTheBetter.mp3",
  ],
  [
    "Mystery of Love",
    "Sufjan Stevens",
    "Call Me by Your Name",
    "/audio/darkRed.mp3",
  ],
];

export const tracks = raw.map(([title, artist, album, audioUrl], index) => ({
  id: String(index + 1),
  title,
  artist: { id: `artist-${index}`, name: artist },
  album: {
    id: `album-${index}`,
    title: album,
    artwork: `https://picsum.photos/seed/soundroom-${index}/160/160`,
  },
  audioUrl,
  liked: [0, 2, 4, 7, 10].includes(index),
  downloaded: [0, 3, 6, 9].includes(index),
  accent: colors[index % colors.length],
}));

export const playlists = [
  {
    id: "p1",
    name: "Late Night Drives",
    description: "Songs for roads with no destination.",
    artwork: "https://picsum.photos/seed/night-drive/300/300",
    tracks: tracks.slice(0, 6),
  },
  {
    id: "p2",
    name: "Soft Focus",
    description: "A quiet place to think and make.",
    artwork: "https://picsum.photos/seed/soft-focus/300/300",
    tracks: tracks.slice(4, 10),
  },
  {
    id: "p3",
    name: "Weekend Energy",
    description: "Turn it up and let the day in.",
    artwork: "https://picsum.photos/seed/weekend/300/300",
    tracks: tracks.slice(2, 8),
  },
];
