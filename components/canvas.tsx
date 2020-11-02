import { useEffect } from "react";
import { width, height } from "../constant/canvasSize";

const defaultCanvasId = 'gl-canvas'

export const WebGlCanvas = (props: {drawingProgram: (gl: WebGLRenderingContext) => void, id?: string})  => {
    useEffect(() => {
        const canvas = document.getElementById(props.id || defaultCanvasId) as HTMLCanvasElement;
        const gl = canvas.getContext("webgl");
        if (gl === null) {
            alert( "Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }
        gl.clearColor(.0, .0, .0, .0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        props.drawingProgram(gl);
    });
    return <canvas id={props.id || defaultCanvasId} width={width} height={height}></canvas>;
};
