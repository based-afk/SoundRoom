# Soundroom

Soundroom is a personal music player built from the ground up to explore the engineering systems behind a modern music application.

The project is being developed incrementally, starting with a browser-based local music player and gradually evolving into a full-stack application with a backend, persistent storage, offline playback, and cross-device synchronization.

## Project Goals

Soundroom is primarily a learning and engineering project focused on understanding how the different pieces of a music application fit together.

The project focuses on:

- Building a reliable audio playback system using browser media APIs
- Separating UI state from playback logic
- Designing a backend for music metadata and user data
- Working with relational databases and media storage
- Supporting downloaded and offline music
- Designing queues and playback state
- Synchronizing user data across devices
- Deploying and operating the application in the cloud

---

## Current Status

The frontend and initial playback system are currently being developed.

### Currently implemented

- React-based music player interface
- Home, Library, and Downloads views
- Track and playlist data models
- Local MP3 playback
- Play / pause / resume
- Real-time playback progress
- Manual seeking
- Automatic detection of track duration
- Volume control UI
- Separation between UI and playback service

### Currently in development

- Previous / next track
- Automatic progression to the next track
- Improved playback state management
- Queue management

### Planned

- Spring Boot backend
- PostgreSQL database
- User accounts
- Playlists
- Liked tracks
- Playback history
- Cloud audio storage
- Download management
- Offline playback
- Cross-device synchronization
- AWS deployment

---

## Tech Stack

### Frontend

- React
- Vite
- JavaScript / JSX
- CSS
- Lucide React

### Backend — Planned

- Java
- Spring Boot
- REST API

### Data — Planned

- PostgreSQL
- Object storage for audio files

### Deployment — Planned

- AWS

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm

You can verify your installation with:

```bash
node --version
npm --version
```
