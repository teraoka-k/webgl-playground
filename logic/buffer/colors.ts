export const squareColors = [
  1.0,
  1.0,
  1.0,
  1.0, // white
  1.0,
  0.0,
  0.0,
  1.0, // red
  0.0,
  1.0,
  0.0,
  1.0, // green
  0.0,
  0.0,
  1.0,
  1.0, // blue
];

/**
 * @private
 */
const _cubeColors = [
  [1.0, 1.0, 1.0, 1.0], // Front face: white
  [1.0, 0.0, 0.0, 1.0], // Back face: red
  [0.0, 1.0, 0.0, 1.0], // Top face: green
  [0.0, 0.0, 1.0, 1.0], // Bottom face: blue
  [1.0, 1.0, 0.0, 1.0], // Right face: yellow
  [1.0, 0.0, 1.0, 1.0], // Left face: purple
];

/**
 * Convert the array of colors into a table for all the vertices.
 */
export const cubeColors = _cubeColors
  // Repeat each color four times for the four vertices of the face
  .map((color) => color.concat(color, color, color))
  .reduce((color1, color2) => color1.concat(color2));
