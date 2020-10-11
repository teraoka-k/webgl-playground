import { useEffect } from "react";
import { main } from "../logic/main";
import { width, height } from "../constant/canvasSize";

export const Canvas = () => {
    useEffect(main);
    return <canvas id="glCanvas" width={width} height={height}></canvas>;
};
