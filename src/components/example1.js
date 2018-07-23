import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";

let count = 0;

export default class Example1 extends Thunk {
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
        return h('div', {
            id: 'example1',
            style: {
                textAlign: 'center',
                color: '#fff',
                lineHeight: (100 + count) + 'px',
                border: '1px solid red',
                width: (100 + count) + 'px',
                height: (100 + count) + 'px',
                backgroundColor: currentColor
            }
        }, [String(count)]);
    }

    update(rootNode, currentNode, nextNode) {
        var patches = diff(currentNode, nextNode);
        rootNode = patch(rootNode, patches);
        currentNode = nextNode;
    }
    
    runningFunction() {
        count++;
        var nextN = new Thunk(this.titleRender, this.titleCompare, { color: this.randomColor()});
        return nextN;
    }

    render() {
        var init = new Thunk(this.titleRender, this.titleCompare, { color: "green"});
        var currentNode = init;
        var rootNode = create(currentNode);
        document.body.appendChild(rootNode);
        return h("button", { type: "button", onclick: e => this.update(rootNode, currentNode, this.runningFunction()) }, 'test 1');
    } 
}