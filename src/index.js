import AppControl from "./components/appCon"

window.renderApp = props => {
    let control = new AppControl(props);
    control.update();
}

window.renderApp({
    appId: "root"
});