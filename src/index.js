import AppControl from "./components/appCon"
import { diff, patch, create, h } from "virtual-dom";

window.renderApp = props => {
    let control = new AppControl(props);
    control.update();
}

window.renderApp({
    appId: "root"
});

window.gparam = { color: "#000", status: "1" }