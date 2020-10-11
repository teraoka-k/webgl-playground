import { mat4 } from "gl-matrix";
import { width, height } from "../constant/canvasSize";

const fieldOfView = Math.PI / 4;
const aspect = width / height;
const zNear = 0.1;
const zFar = 100.0;

export const projectionMatrix = mat4.create();

mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);