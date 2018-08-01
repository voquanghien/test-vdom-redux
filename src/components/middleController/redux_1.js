import { diff, patch, create, h } from "virtual-dom";
import SimRe from "../simple-redux/simpleRedux"

export default class testRedux1 {
    constructor(root) {
      this.root = root;
    }
    
    render(store) {
        // TODO: render your app's tree here
        return h("div", {id:"reduxEx"}, new SimRe(store));
    }
  
    update(store) {
        let tree = this.render(store);
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
  