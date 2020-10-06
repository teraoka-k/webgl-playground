import { useEffect } from "react";
import { main } from "../logic/main";

export const Canvas = () => {
  useEffect(main);
  return <canvas id="glCanvas" width="640" height="480"></canvas>;
};
