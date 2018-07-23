import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";

let count = 0;

export default class Example2 extends Thunk {
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
        return h("h1", { style : {color: currentColor}}, "Hello, it's me!");
    }

    update(rootNode, currentNode, nextNode) {
        var patches = diff(currentNode, nextNode);
        rootNode = patch(rootNode, patches);
        currentNode = nextNode;
    }

    changeColor(rootNode, currentNode) {
        var nextN = new Thunk(this.titleRender, this.titleCompare, { color: this.randomColor()});
        this.update(rootNode, currentNode, nextN);
    }

    changeColorRecur (rootNode, currentNode) {
        count++;
        this.changeColor(rootNode, currentNode);
        console.log(count);
    }

    rdm() {
        var rdm = new Thunk(this.titleRender, this.titleCompare, { color: this.randomColor()});
        return rdm;
    }

    render () {
        var GreenColoredThunk = new Thunk(this.titleRender, this.titleCompare, { color: "green"});
        var currentNode = GreenColoredThunk;
        var rootNode = create(currentNode);
        document.body.appendChild(rootNode);
        return h("button", { type: "button", onclick: e => this.update(rootNode, currentNode, this.rdm()) }, 'test 2');
        //return h("div", {id:"example11"}, [h("button", { type: "button", onclick: e => this.update(rootNode, currentNode, this.rdm()) }, 'test 2')])
        //document.getElementById("example2").appendChild(rootNode);
    }

}