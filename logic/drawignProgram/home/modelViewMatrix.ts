import { mat4 } from "gl-matrix";

export const modelViewMatrix = mat4.create();
mat4.translate(
    modelViewMatrix, // destination matrix
    modelViewMatrix, // matrix to translate
    [0.0, 0.0, -6.0]
);