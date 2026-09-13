import pool from "../db/connection.js";

export const getTracks = async () => {
  const result = await pool.query("SELECT * FROM tracks");
  return result.rows;
};
export const getTrackById = async (id) => {
  const result = await pool.query(`SELECT * FROM tracks WHERE id=$1`, [id]);
  if (result.rows.length === 0) {
    console.log("No such track exists");
  }
  return result.rows[0];
};
export const createTrack = async (track) => {
  const result = await pool.query(
    `INSERT INTO tracks (title, artist, album, artwork_url, audio_url)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [
      track.title,
      track.artist,
      track.album,
      track.artwork_url,
      track.audio_url,
    ],
  );

  return result.rows[0];
};
export const updateTrack = async (
  id,
  title,
  artist,
  album,
  artwork_url,
  audio_url,
) => {
  const result = await pool.query(
    `UPDATE tracks
     SET title = $1,
         artist = $2,
         album = $3,
         artwork_url = $4,
         audio_url = $5
     WHERE id = $6
     RETURNING *`,
    [title, artist, album, artwork_url, audio_url, id],
  );

  return result.rows[0];
};
export const deleteTrack = async (id) => {
  const result = await pool.query(
    `DELETE FROM tracks
     WHERE id = $1
     RETURNING *`,
    [id],
  );

  return result.rows[0];
};
