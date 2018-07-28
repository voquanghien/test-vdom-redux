import { diff, patch, create, h } from "virtual-dom";
import Example4 from "./example4"

export default class testThunk {
    constructor(root, myObserved) {
      this.root = root;
      this.myObserved = myObserved;
    }
    
    render() {
        // TODO: render your app's tree here
        return h("div", {id:"thunkEx"}, new Example4(this.myObserved));
    }
  
    update() {
        let tree = this.render();
        if (!this.dom) {
            this.dom = create(tree);
            document.getElementById(this.root).appendChild(this.dom);
        } else {
            let patches = diff(this.tree, tree);
            this.dom = patch(this.dom, patches);
            //console.log('update');
        }
        this.tree = tree;
    }
}
  