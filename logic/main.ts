import { createShader } from "./shader";
import { createBuffers } from "./buffer/buffer";
import { drawScene } from "./draw";
import { rotate } from "./rotate";

export const main = (): void => {
  const canvas: HTMLCanvasElement = document.querySelector("#glCanvas");
  const gl = canvas.getContext("webgl");

  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  const shader = createShader(gl);
  const buffers = createBuffers(gl);
  // drawScene(gl, shader, buffers, 0);
  rotate(gl, shader, buffers);
};
