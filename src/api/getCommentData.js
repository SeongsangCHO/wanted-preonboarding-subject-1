import axios from "axios";
import { API_ENDPOINT, COMMENT_DATA_MAXIMUM_COUNT } from "../constants";

export const getCommentData = async (page) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}`, {
      params: {
        _page: page,
        _limit: COMMENT_DATA_MAXIMUM_COUNT,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
