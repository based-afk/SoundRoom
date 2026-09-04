export interface Artist { id: string; name: string }
export interface Album { id: string; title: string; artwork: string }
export interface Track { id: string; title: string; artist: Artist; album: Album; duration: number; liked: boolean; downloaded: boolean; accent: string }
export interface Playlist { id: string; name: string; description: string; artwork: string; tracks: Track[] }
export interface Queue { current: Track; upcoming: Track[] }
