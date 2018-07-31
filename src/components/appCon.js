import AppThunk from "./appThunk_app";
import AppVdom from "./appVdom";
import testThunk1 from "./appThunk_com_1";
import testThunk2 from "./appThunk_com_2";
import Observer from '../common/observer';
import comFunc from "../common/comFunc";
import testRedux1 from "./a"
import store from "../store";

let thunkbtn = document.getElementById("thunk");
let vdombtn = document.getElementById("vdom");
let testbtn1 = document.getElementById("test1");
let testbtn2 = document.getElementById("test2");
let testbtn3 = document.getElementById("testRedux");

export default class AppControl {
    constructor(props) {
        this.appId = props.appId;
    }

    update() {
        this.vdomTest(this.appId);
        this.thunkTest(this.appId);
        this.testThunk1(this.appId);
        this.testThunk2(this.appId);
        this.testRedux(this.appId);
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

    testThunk1(appId) {
        testbtn1.addEventListener('click', () => {
            let myObserved = new Observer({color : "#000", status: 1} , e => a.update(myObserved));
            let a = new testThunk1(appId);
            a.update(myObserved);
        });
    }

    testThunk2(appId) {
        testbtn2.addEventListener('click', () => {
            var testf = [];
            new comFunc().saveRandomColorsByApi(testf).then((json)=>{
                let myObserved = new Observer({color : "#000", status: 1, Arr:testf} , e => a.update(myObserved));
                let a = new testThunk2(appId);
                a.update(myObserved);
            });
        });
    }

    testRedux(appId) {
        testbtn3.addEventListener('click', () => {
            let a = new testRedux1(appId);
            a.update(store);
        });
    }
}