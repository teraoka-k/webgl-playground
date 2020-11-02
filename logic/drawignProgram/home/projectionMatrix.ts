import { mat4 } from "gl-matrix";
import { width, height } from "../../../constant/canvasSize";

export const projectionMatrix = mat4.perspective(mat4.create(), Math.PI / 4, width/height, .1, 100.0);