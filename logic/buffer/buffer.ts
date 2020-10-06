import { cubePositions } from "./positions";
import { cubeColors } from "./colors";

/**
 * Create a buffer for the square's positions.
 */
export const createBuffers = (gl: WebGLRenderingContext): Buffers => {
  return {
    position: createPositionBuffer(gl),
    color: createColorBuffer(gl),
    indices: createIndexBuffer(gl),
  };
};

export type Buffers = {
  position: WebGLBuffer;
  color: WebGLBuffer;
  indices: WebGLBuffer;
};

/**
 * @private
 */
const createPositionBuffer = (gl: WebGLRenderingContext): WebGLBuffer => {
  const buffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  // Now create an array of positions for the square.
  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(cubePositions),
    gl.STATIC_DRAW
  );

  return buffer;
};

/**
 * @private
 */
const createColorBuffer = (gl: WebGLRenderingContext): WebGLBuffer => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeColors), gl.STATIC_DRAW);

  return buffer;
};

/**
 * @private
 */
const createIndexBuffer = (gl: WebGLRenderingContext): WebGLBuffer => {
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.
  const indices = [
    0,
    1,
    2,
    0,
    2,
    3, // front
    4,
    5,
    6,
    4,
    6,
    7, // back
    8,
    9,
    10,
    8,
    10,
    11, // top
    12,
    13,
    14,
    12,
    14,
    15, // bottom
    16,
    17,
    18,
    16,
    18,
    19, // right
    20,
    21,
    22,
    20,
    22,
    23, // left
  ];

  // Now send the element array to GL
  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW
  );

  return buffer;
};
