
import AppThunk from "./appThunk";
import AppVdom from "./appVdom";
import testThunk from "./appTemp";
import Observer from '../common/observer';

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
            let thunkex = new AppThunk(appId);
            thunkex.update();
        });
    }

    vdomTest(appId) {
        vdombtn.addEventListener('click', () => {
            let vdomex = new AppVdom(appId);
            vdomex.main();
        });
    }

    testThunk(appId) {
        testbtn.addEventListener('click', () => {
            let myObserved = new Observer({color : "#000", status: 1} , e => a.update(myObserved));
            let a = new testThunk(appId);
            a.update(myObserved);
        });
    }
}