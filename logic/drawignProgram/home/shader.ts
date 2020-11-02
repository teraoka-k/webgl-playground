import vsSource from "./vsSource.glsl";
import fsSource from "./fsSource.glsl";
import { createProgram } from "../common/shader";

/**
 * Vertex shader program
 */
export const createShader = (gl: WebGLRenderingContext): Program => {
  const program = createProgram(gl, vsSource, fsSource);
  return {
    shader: program,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(program, "aVertexPosition"),
      vertexColor: gl.getAttribLocation(program, "aVertexColor"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(program, "uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(program, "uModelViewMatrix"),
    },
  };
};

export type Program = {
  shader: WebGLShader;
  attribLocations: {
    vertexPosition: number;
    vertexColor: number;
  };
  uniformLocations: {
    projectionMatrix: WebGLUniformLocation;
    modelViewMatrix: WebGLUniformLocation;
  };
};