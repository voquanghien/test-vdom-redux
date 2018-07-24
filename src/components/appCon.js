import AppThunk from "./appThunk";
import AppVdom from "./appVdom";

let thunkbtn = document.getElementById("thunk");
let vdombtn = document.getElementById("vdom");

export default class AppControl {
    constructor(props) {
        this.appId = props.appId;
    }

    update() {
        this.vdomTest(this.appId);
        this.thunkTest(this.appId);
    }

    thunkTest(appId) {
        thunkbtn.addEventListener('click', function () {
            var thunkex = new AppThunk(appId);
            thunkex.update();
        });
    }

    vdomTest(appId) {
        vdombtn.addEventListener('click', function () {
            var vdomex = new AppVdom(appId);
            vdomex.main();
        });
    }
}