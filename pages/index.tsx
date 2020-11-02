import { WebGlCanvas } from "../components/canvas";
import { Navigation, PageType } from "../components/navigation";
import { main } from "../logic/drawignProgram/home/main";

const Index = () => {
    return (
        <div>
            <h1>WebGL Playground</h1>
            <Navigation currentPageType={PageType.Home}></Navigation>
            <WebGlCanvas drawingProgram={main}></WebGlCanvas>
        </div>
    );
};
export default Index;
