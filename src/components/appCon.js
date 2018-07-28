
import AppThunk from "./appThunk";
import AppVdom from "./appVdom";
import testThunk from "./appTemp";
import Observer from '../common/subpub.js';

let thunkbtn = document.getElementById("thunk");
let vdombtn = document.getElementById("vdom");
let testbtn = document.getElementById("test");

export default class AppControl {
    constructor(props) {
        this.appId = props.appId;
    }

    update() {
        this.vdomTest(this.appId);
        this.thunkTest(this.appId);
        this.testThunk(this.appId);
    }

    thunkTest(appId) {
        thunkbtn.addEventListener('click', () => {
            var thunkex = new AppThunk(appId);
            thunkex.update();
        });
    }

    vdomTest(appId) {
        vdombtn.addEventListener('click', () => {
            var vdomex = new AppVdom(appId);
            vdomex.main();
        });
    }

    testThunk(appId) {
        testbtn.addEventListener('click', () => {
            const myObserved = new Observer({color : "#000", status: 1} , e => a.update());
            var a = new testThunk(appId, myObserved);
            a.update();
        });
    }
}