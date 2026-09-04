# Soundroom

A small Spotify-inspired personal music player UI built with Vite, React and TypeScript. It currently uses realistic mock data and keeps playback/API boundaries ready for a future backend.

## Run locally

```bash
npm install
npm run dev
```

## Structure

- `src/components`: navigation, sidebars, reusable track rows/lists, and the persistent player.
- `src/pages`: home, library, and downloads views.
- `src/services`: `MusicAPI` and `PlayerService` contracts with mock implementations.
- `src/types`: shared music entities.
- `src/data.ts`: mock tracks and playlists.

Interactive components emit callbacks to `App.tsx`. Replace the mock functions in `src/services` with real API and playback implementations later; the UI does not need to change.
