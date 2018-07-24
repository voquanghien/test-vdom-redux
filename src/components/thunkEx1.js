import { diff, patch, create, h } from "virtual-dom";
import Thunk from "../common/thunk";
import comFunc from "../common/comFunc";

let count = 0, rootNode, currentNode;

export default class thunkEx1 extends Thunk {
    constructor() {
        super();
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

    update(nextNode) {
        var patches = diff(currentNode, nextNode);
        rootNode = patch(rootNode, patches);
        currentNode = nextNode;
    }
    
    runningFunction() {
        count++;
        var rdc = new comFunc().randomColor();
        var nextN = new Thunk(this.titleRender, this.titleCompare, { color: rdc });
        return nextN;
    }

    render() {
        var init = new Thunk(this.titleRender, this.titleCompare, { color: "green"});
        currentNode = init;
        rootNode = create(currentNode);
        document.body.appendChild(rootNode);
        return h("button", { type: "button", onclick: e => this.update(this.runningFunction()) }, 'test 1');
    } 
}