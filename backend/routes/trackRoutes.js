import express from "express";
import {
  getTrackById,
  getTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} from "../queries/trackQueries.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tracks = await getTracks();
    res.json({ result: tracks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch tracks" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const tracks = await getTrackById(req.params.id);
    if (!tracks) {
      return res.status(404).json({ error: "Track not found" });
    }
    res.json({ result: tracks });
  } catch (error) {
    console.error("Failed to fetch track:", error);
    res.status(500).json({ error: "Failed to fetch track" });
  }
});
router.post("/", async (req, res) => {
  try {
    const track = await createTrack(req.body);

    res.status(201).json({ result: track });
  } catch (error) {
    console.error("Failed to create track:", error);
    res.status(500).json({ error: "Failed to create track" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    const { title, artist, album, artwork_url, audio_url } = req.body;

    const track = await updateTrack(
      req.params.id,
      title,
      artist,
      album,
      artwork_url,
      audio_url,
    );

    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }

    res.json({ result: track });
  } catch (error) {
    console.error("Failed to update track:", error);
    res.status(500).json({ error: "Failed to update track" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const track = await deleteTrack(req.params.id);

    if (!track) {
      return res.status(404).json({ error: "Track not found" });
    }

    res.json({ result: track });
  } catch (error) {
    console.error("Failed to delete track:", error);
    res.status(500).json({ error: "Failed to delete track" });
  }
});

export default router;
