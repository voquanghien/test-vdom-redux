import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";

let count = 0;
let colorparam = "#ccc";

export default class Example3 extends Thunk {
    constructor() {
        super();
    }

    randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    titleCompare (previousState, currentState) {
        return previousState.color !== currentState.color;
    }

    titleRender(previouseThunk, currentThunk) {
        var currentColor = currentThunk.state.color;
        // return h("h1", { style : {color: currentColor}}, "Hello, it's me!");
    }

    update(rootNode, currentNode, nextNode) {
        var patches = diff(currentNode, nextNode);
        rootNode = patch(rootNode, patches);
        currentNode = nextNode;
    }

    rdm() {
        var rdm = new Thunk(this.titleRender, this.titleCompare, { color: this.randomColor()});
        return rdm;
    }

    render () {
        
        return h("div",[h("h1", { style : {color: colorparam}}, "Hello, it's me!"), h("button", { type: "button", onclick: e => this.update(this.rdm()) }, 'test 2')]);
        //return h("button", { type: "button", onclick: e => console.log('a') }, 'test 2');
    }

}