import axios from "axios";
import type { Video } from "../models/Video";

const API_URL = "https://localhost:7107/api/videos";

export const getVideos = async (): Promise<Video[]> => {
  const res = await axios.get<Video[]>(API_URL);
  return res.data;
};
