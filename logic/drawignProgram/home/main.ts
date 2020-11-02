import { createBuffers } from "../../buffer/buffer";
import { rotate } from "./rotate";
import { createShader } from "./shader";

export const main = (gl: WebGLRenderingContext): void => {
  const shader = createShader(gl);
  const buffers = createBuffers(gl);
  rotate(gl, shader, buffers);
};
