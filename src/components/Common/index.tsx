import React from "react";
import { Spinner } from "./loader";

const PageLoadepstyle = {
  width: "48px",
  height: "40%",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

/**
 * Page Loading spinner
 */
export const PageLoader = () => (
  <Spinner color={"#5e94ff"} style={PageLoadepstyle} />
);

/**
 * 404 component
 */
export const NotFound = () => (
  <div className="flex h-screen justify-center items-center">
    <h1 className="m-5">404 Not Found!</h1>
  </div>
);
