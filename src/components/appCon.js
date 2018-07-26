import AppThunk from "./appThunk";
import AppVdom from "./appVdom";
import testThunk from "./appTemp"

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

    observer(changeRecords){
        changeRecords.forEach(function(change){
            console.log({
                affectedPropertyName: change.name, 
                valueBeforeChange:    change.oldValue,
                changeType:           change.type, 
                affectedObject:       change.object
            });
        });
    }

    testThunk(appId) {
        testbtn.addEventListener('click', () => {
            // var a = new testThunk(appId, window.gparam);
            // a.update();
            var todoModel = {
                label: 'Default',
                completed: false
            };
            Object.observe(todoModel, this.observer);
        });
    }
}