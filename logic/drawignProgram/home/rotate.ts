import { drawScene } from "./draw";
import { Buffers } from "../../buffer/buffer";
import { mat4 } from "gl-matrix";
import { modelViewMatrix } from "./modelViewMatrix";
import { Program } from "./shader";

export const rotate = (gl: WebGLRenderingContext, program: Program, buffers: Buffers) => {
  mat4.rotate(modelViewMatrix, modelViewMatrix, .0133, [0, 0, 1]);
  mat4.rotate(modelViewMatrix, modelViewMatrix, .0133 * 0.7, [0, 1, 0]);
  mat4.rotate(modelViewMatrix, modelViewMatrix, .0133 * 0.4, [1, 0, 0]);
  drawScene(gl, program, buffers);
  requestAnimationFrame(() => rotate(gl, program, buffers));
};
