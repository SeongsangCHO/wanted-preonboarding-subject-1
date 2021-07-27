import axios from "axios";

const API_ENDPOINT = `https://jsonplaceholder.typicode.com/comments`;
const LIMIT = 10;
/*
 * _page = 1.. ++
 * _limit = 10 fix
 */

export const getCommentData = async (page) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}`, {
      params: {
        _page: page,
        _limit: LIMIT,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
