import { combineReducers } from "redux";
import dashboard from "./dashboard";

export const rootReducer = combineReducers({
  dashboard
});

export type RootState = ReturnType<typeof rootReducer>;
