import Example1 from "./components/example1";
import App from "./components/app";
import Example2 from "./components/example2";
import { h, create } from "virtual-dom";
import Example3 from "./components/example3";

window.renderApp = props => {
    let module = new App(props);
    module.update();
}

window.renderApp({
    appId: "root"
});