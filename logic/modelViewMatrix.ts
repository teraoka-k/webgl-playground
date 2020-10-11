
// Set the drawing position to the "identity" point, which is

import { mat4 } from "gl-matrix";

// the center of the scene.
export const modelViewMatrix = mat4.create();
// Now move the drawing position a bit to where we want to
// start drawing the square.
mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [0.0, 0.0, -6.0]
); // amount to translate