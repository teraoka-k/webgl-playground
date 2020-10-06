import vsSource from "../glsl/vsSource.glsl";
import fsSource from "../glsl/fsSource.glsl";

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

/**
 * @private
 * Initialize a shader program, so WebGL knows how to draw our data
 */
const createProgram = (
  gl: WebGLRenderingContext,
  vsSource: string,
  fsSource: string
): WebGLProgram => {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program
  const program = gl.createProgram();
  [vertexShader, fragmentShader].forEach((shader) =>
    gl.attachShader(program, shader)
  );
  gl.linkProgram(program);

  // If creating the shader program failed, alert
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    alert(
      "Unable to initialize the shader program: " +
        gl.getProgramInfoLog(program)
    );
    return null;
  }

  return program;
};

/**
 * @private
 * creates a shader of the given type, uploads the source and compiles it.
 */
const loadShader = (
  gl: WebGLRenderingContext,
  type: number,
  source: string
): WebGLShader => {
  const shader = gl.createShader(type);

  // Send the source to the shader object
  gl.shaderSource(shader, source);

  // Compile the shader program
  gl.compileShader(shader);

  // See if it compiled successfully
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      "An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader)
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
};
