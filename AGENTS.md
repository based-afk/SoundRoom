# AGENTS.md

## Project: Personal Music Player

This repository contains a personal, cross-device music player built primarily as a
backend-focused engineering project.

The frontend is intentionally simple. The main engineering work will be in the
backend, music playback architecture, storage, caching, synchronization, offline
support, filtering, and AWS integration.

This file is the source of truth for how AI coding agents should work on this project.

---

# 1. Core Philosophy

## Keep it simple.

This project is being developed by one student developer.

Prefer:

- simple code
- explicit code
- readable code
- predictable file locations
- small numbers of abstractions
- straightforward React patterns
- easy-to-debug implementations

Avoid:

- unnecessary abstractions
- over-engineering
- excessive design patterns
- unnecessary dependencies
- complicated state-management systems
- deeply nested component hierarchies
- creating files for trivial pieces of code
- enterprise architecture for simple problems

A developer should be able to look at the repository and understand where a
feature lives without searching through many unrelated files.

### Important rule

If a feature can be implemented clearly with fewer files, prefer the smaller
implementation.

Do not add architectural complexity simply because it is considered a
"best practice" in a large production application.

---

# 2. Technology

## Frontend

- Vite
- React
- TypeScript

## Backend

- Spring Boot
- Java

## Database

Use the database selected for the current development stage.

The initial implementation may use a local database during development.

## Cloud

AWS will be introduced gradually.

Expected services may include:

- S3
- CloudFront if genuinely useful
- other AWS services only when there is a clear reason

Do not introduce AWS services simply to increase the number of services in the
architecture.

---

# 3. Project Goals

The application should eventually support:

- music search
- music playback
- play/pause
- previous/next
- seeking
- playback progress
- liked songs
- downloaded songs
- playlists
- playback queue
- playback history
- offline playback
- cross-device access
- synchronization
- cloud music storage
- configurable filtering/rules

The UI should remain intentionally minimal.

The project should demonstrate backend and systems engineering rather than
frontend design complexity.

---

# 4. Frontend Architecture

The frontend should remain small and easy to understand.

Preferred structure:

src/
│
├── components/
│   ├── Navbar.tsx
│   ├── LibrarySidebar.tsx
│   ├── QueueSidebar.tsx
│   ├── TrackList.tsx
│   ├── TrackRow.tsx
│   └── MusicPlayer.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Library.tsx
│   └── Downloads.tsx
│
├── services/
│   ├── musicApi.ts
│   └── playerService.ts
│
├── types/
│   └── music.ts
│
├── App.tsx
├── main.tsx
└── index.css

Do not create additional folders unless there is a demonstrated need.

For example, do not automatically create:

- hooks/
- contexts/
- stores/
- utils/
- managers/
- providers/
- repositories/
- factories/
- adapters/

These may be introduced later if the application actually requires them.

---

# 5. Frontend Component Responsibilities

## Navbar.tsx

Responsible for:

- application branding
- navigation
- search interface

It should not:

- call the backend directly
- access the database
- implement playback
- contain business logic

User actions should be exposed through callbacks.

---

## LibrarySidebar.tsx

Responsible for navigation between:

- Liked Songs
- Downloads
- Playlists

It should not directly retrieve library data.

---

## QueueSidebar.tsx

Responsible for displaying:

- currently playing track
- upcoming tracks
- queue-related UI

It should not implement the queue's business logic.

---

## TrackList.tsx

Responsible for displaying a collection of tracks.

The same component should be reusable for:

- search results
- liked songs
- downloaded songs
- playlists
- recently played tracks

Do not create separate list components for each of these unless their
behavior genuinely differs.

---

## TrackRow.tsx

Responsible for displaying one track.

A track row may contain:

- album artwork
- title
- artist
- duration
- play action
- like action
- download action

It should communicate user actions through callbacks.

Example:

```ts
onPlay(track)
onLike(track)
onDownload(track)