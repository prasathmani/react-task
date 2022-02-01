import {
    GET_LOGIN,
    GET_POSTS
} from "./types";

import DashboardService from "../services/dashboard";

export const getAllPostsAction = () => async (dispatch) => {
    try {
        const res = await DashboardService.getAllPosts();
        dispatch({
            type: GET_POSTS,
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getLoginAction = () => async (dispatch) => {
    try {
        const res = await DashboardService.getLoginService();
        dispatch({
            type: GET_LOGIN,
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};
