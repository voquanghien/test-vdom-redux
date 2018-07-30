import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";
import comFunc from "../common/comFunc";

let count = 0;
let colorparam = "#ccc";

export default class Example3 extends Thunk {
    constructor(root) {
        super();
        this.root = root;
    }

    titleCompare (previousState, currentState) {
        return previousState.color !== currentState.color;
    }

    titleRender(previouseThunk, currentThunk) {
        let currentColor = currentThunk.state.color;
        return h("h1", { style : {color: currentColor}}, "Hello, it's me!");
    }

    initialRen() {
        return h();
    }

    update(rootNode, currentNode, nextNode) {
        let patches = diff(currentNode, nextNode);
        rootNode = patch(rootNode, patches);
        currentNode = nextNode;
    }

    rdm() {
        let rdm = new Thunk(this.titleRender, this.titleCompare, { color: new comFunc().randomColor()});
        return rdm;
    }

    render () {
        return h("div",[h("h1", { style : {color: colorparam}}, "Hello, it's me!"), h("button", { type: "button", onclick: e => this.update(rootNode, currentNode, this.rdm()) }, 'test 2')]);
    }

}