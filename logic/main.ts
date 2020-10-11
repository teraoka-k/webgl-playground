import { createShader } from "./shader";
import { createBuffers } from "./buffer/buffer";
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
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const shader = createShader(gl);
  const buffers = createBuffers(gl);
  rotate(gl, shader, buffers);
};
