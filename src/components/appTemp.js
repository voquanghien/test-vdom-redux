import { diff, patch, create, h } from "virtual-dom";
import Example4 from "./example4"

export default class testThunk {
    constructor(root) {
      this.root = root;
    }
    
    render(myObserved) {
        // TODO: render your app's tree here
        return h("div", {id:"thunkEx"}, new Example4(myObserved));
    }
  
    update(myObserved) {
        let tree = this.render(myObserved);
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
  