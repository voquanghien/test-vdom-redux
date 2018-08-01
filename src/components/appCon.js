import AppThunk from "./middleController/appThunk_app";
import AppVdom from "./middleController/appVdom";
import testThunk1 from "./middleController/appThunk_com_1";
import testThunk2 from "./middleController/appThunk_com_2";
import testRedux1 from "./middleController/redux_1"
import Observer from '../common/observer';
import comFunc from "../common/comFunc";
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
    //initial function calling button
    update() {
        this.vdomTest(this.appId);
        this.thunkTest(this.appId);
        this.testThunk1(this.appId);
        this.testThunk2(this.appId);
        this.testRedux(this.appId);
    }
    //pure virtual dom testing
    vdomTest(appId) {
        vdombtn.addEventListener('click', () => {
            let vdomex = new AppVdom(appId);
            vdomex.main();
        });
    }
    //test applying thunk as applications
    thunkTest(appId) {
        thunkbtn.addEventListener('click', () => {
            let thunkex = new AppThunk(appId);
            thunkex.update();
        });
    }
    //test applying thunk as components (with api calling - ajax) 1 - using observer to check object's changes
    testThunk1(appId) {
        testbtn1.addEventListener('click', () => {
            let myObserved = new Observer({color : "#000", status: 1} , e => {
                requestAnimationFrame(()=>{
                    a.update(myObserved);
                })
            });
            let a = new testThunk1(appId);
            a.update(myObserved);
        });
    }
    //test applying thunk as components (with api calling - ajax) 2 - using observer to check object's changes
    testThunk2(appId) {
        testbtn2.addEventListener('click', () => {
            var testf = [];
            new comFunc().saveRandomColorsByApi(testf).then((json)=>{
                let myObserved = new Observer({color : "#000", status: 1, Arr:testf} , e => {
                    requestAnimationFrame(()=>{
                        a.update(myObserved);
                    })  
                });
                let a = new testThunk2(appId);
                a.update(myObserved);
            });
        });
    }
    //test applying simple redux in thunk (increase and decrease example)
    testRedux(appId) {
        testbtn3.addEventListener('click', () => {
            console.log(store.getState());
            let a = new testRedux1(appId);
            a.update(store);
            store.subscribe(() => {
                requestAnimationFrame(()=>{
                    console.log(store.getState());
                    a.update(store);
                })
            });
        });
    }
}