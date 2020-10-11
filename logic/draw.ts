import { Program } from "./shader";
import { Buffers } from "./buffer/buffer";
import { projectionMatrix } from "./projectionMatrix";
import { modelViewMatrix } from "./modelViewMatrix";

export const drawScene = (
  gl: WebGLRenderingContext,
  program: Program,
  buffers: Buffers,
): void => {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.enable(gl.DEPTH_TEST); // Enable depth testing
  gl.depthFunc(gl.LEQUAL); // Near things obscure far things
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  setVertexPosition(
    gl,
    buffers.position,
    program.attribLocations.vertexPosition
  );
  setVertexColor(gl, buffers.color, program.attribLocations.vertexColor);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  gl.useProgram(program.shader);
  gl.uniformMatrix4fv(program.uniformLocations.projectionMatrix, false, projectionMatrix);
  gl.uniformMatrix4fv(program.uniformLocations.modelViewMatrix, false, modelViewMatrix);
  {
    const offset = 0;
    const vertexCount = 4;
    gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
  }
  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
};

/**
 * Tell WebGL how to pull out the positions from the position
 * buffer into the vertexPosition attribute.
 */
const setVertexPosition = (
  gl: WebGLRenderingContext,
  buffer: WebGLBuffer,
  vertexPosition: number
) => {
  const numComponents = 3; // pull out 2 values per iteration
  const type = gl.FLOAT; // the data in the buffer is 32bit floats
  const normalize = false; // don't normalize
  const stride = 0; // how many bytes to get from one set of values to the next
  const offset = 0; // how many bytes inside the buffer to start from
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(
    vertexPosition,
    numComponents,
    type,
    normalize,
    stride,
    offset
  );
  gl.enableVertexAttribArray(vertexPosition);
};

/**
 * @private
 * Tell WebGL how to pull out the colors from the color buffer into the vertexColor attribute.
 */
const setVertexColor = (
  gl: WebGLRenderingContext,
  buffer: WebGLBuffer,
  vertexColor: number
) => {
  const numComponents = 4;
  const type = gl.FLOAT;
  const normalize = false;
  const stride = 0;
  const offset = 0;
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(
    vertexColor,
    numComponents,
    type,
    normalize,
    stride,
    offset
  );
  gl.enableVertexAttribArray(vertexColor);
};
