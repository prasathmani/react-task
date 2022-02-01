import { GET_LOGIN, GET_POSTS } from "../actions/types";

const initialState = {
  auth: [],
  posts: [],
};

const employeesReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_LOGIN: {
      const newState = { auth: payload };
      return { ...state, ...newState };
    }
    case GET_POSTS: {
      const newState = { posts: payload };
      return { ...state, ...newState };
    }

    default:
      return state;
  }
};

export default employeesReducer;
