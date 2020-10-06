import { Program } from "./shader";
import { drawScene } from "./draw";
import { Buffers } from "./buffer/buffer";

let rotationAngle = 0.0;

export const rotate = (
  gl: WebGLRenderingContext,
  program: Program,
  buffers: Buffers
) => {
  let start: number = 0.0;

  // Draw the scene repeatedly
  const render = (timestamp: number) => {
    drawScene(
      gl,
      program,
      buffers,
      (rotationAngle += (timestamp - start) * 0.001)
    );
    start = timestamp;
    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};
