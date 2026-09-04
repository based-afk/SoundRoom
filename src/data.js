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
  ["Midnight City", "M83", "Hurry Up, We’re Dreaming", 244],
  ["Sunset Lover", "Petit Biscuit", "Presence", 237],
  ["Sweet Disposition", "The Temper Trap", "Conditions", 235],
  ["The Less I Know The Better", "Tame Impala", "Currents", 217],
  ["Space Song", "Beach House", "Depression Cherry", 320],
  ["Mystery of Love", "Sufjan Stevens", "Call Me by Your Name", 259],
  ["After Dark", "Mr.Kitty", "Time", 260],
  ["Electric Feel", "MGMT", "Oracular Spectacular", 229],
  ["505", "Arctic Monkeys", "Favourite Worst Nightmare", 253],
  ["A Real Hero", "College", "Secret Diary", 247],
  ["Dreams Tonite", "Alvvays", "Antisocialites", 215],
  ["Holocene", "Bon Iver", "Bon Iver", 336],
];

export const tracks = raw.map(([title, artist, album, duration], index) => ({
  id: String(index + 1),
  title,
  artist: { id: `artist-${index}`, name: artist },
  album: {
    id: `album-${index}`,
    title: album,
    artwork: `https://picsum.photos/seed/soundroom-${index}/160/160`,
  },
  audioUrl: index === 0 ? "/audio/congratulations.mp3" : null,
  duration,
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
