import { GET_IMAGES } from "../Pages/LandingPage/actions";

const initialState = {
  allImages: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return { allImages: action.payload };
    default:
      return state;
  }
};
