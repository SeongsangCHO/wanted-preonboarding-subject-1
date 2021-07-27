import axios from "axios";
import { API_ENDPOINT, PAGE_LIMIT } from "../constants";

export const getCommentData = async (page) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}`, {
      params: {
        _page: page,
        _limit: PAGE_LIMIT,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
