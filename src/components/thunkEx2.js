import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";
import comFunc from "../common/comFunc";

let count = 0, currentNode, rootNode;

export default class thunkEx2 extends Thunk {
    constructor() {
        super();
    }

    titleCompare (previousState, currentState) {
        return previousState.color !== currentState.color;
    }

    titleRender(previouseThunk, currentThunk) {
        let currentColor = currentThunk.state.color;
        return h("h1", { style : {color: currentColor}}, "Hello, it's me!");
    }

    update(nextNode) {
        let patches = diff(currentNode, nextNode);
        rootNode = patch(rootNode, patches);
        currentNode = nextNode;
    }

    rdm() {
        let rdc = new comFunc().randomColor();
        let rdm = new Thunk(this.titleRender, this.titleCompare, { color: rdc});
        return rdm;
    }

    render () {
        let GreenColoredThunk = new Thunk(this.titleRender, this.titleCompare, { color: "green"});
        currentNode = GreenColoredThunk;
        rootNode = create(currentNode);
        document.body.appendChild(rootNode);
        return h("button", { type: "button", onclick: e => this.update(this.rdm()) }, 'test 2');
        //return h("div", {id:"example11"}, [h("button", { type: "button", onclick: e => this.update(rootNode, currentNode, this.rdm()) }, 'test 2')])
        //document.getElementById("example2").appendChild(rootNode);
    }

}