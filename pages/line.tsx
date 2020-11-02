import React from "react";
import { WebGlCanvas } from "../components/canvas";
import { Navigation, PageType } from "../components/navigation";
import { main } from "../logic/drawignProgram/home/main";

const Line = () => {
    return (
        <div>
            <h1>WebGL Playground</h1>
            <Navigation currentPageType={PageType.Line}></Navigation>
            <h2>Line</h2>
            <WebGlCanvas drawingProgram={main} id={'line-1'}></WebGlCanvas>
            <WebGlCanvas drawingProgram={main} id={'line-2'}></WebGlCanvas>
        </div>
    );
};
export default Line;
