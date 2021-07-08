import axios from "axios";

export const GET_IMAGES = "GET_IMAGES";

const URL = "https://jsonplaceholder.typicode.com/";
// const ALBUM_WITH_ID = "photos?albumId=";
const ALL_COMPLETE_ALBUMS = "albums";

export const getCompleteAlbums = () => async (dispatch) => {
  try {
    const newUrl = URL + ALL_COMPLETE_ALBUMS;
    const response = await axios.get(newUrl);
    return response;
  } catch (ex) {
    return Promise.reject(ex);
  }
};
