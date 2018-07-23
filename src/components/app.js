import { diff, patch, create, h } from "virtual-dom";
import Example1 from "./example1";
import Example2 from "./example2"
import Example3 from "./example3";

export default class App {
    constructor(props) {
      this.props = props;
    }
    
    render() {
      // TODO: render your app's tree here
      return h("div", [new Example1(), new Example2() ]);
    }
  
    update() {
        let tree = this.render();
        console.log(this.props.appId);
        if (!this.dom) {
            this.dom = create(tree);
            document.getElementById(this.props.appId).appendChild(this.dom);
            console.log('init');
        } else {
            let patches = diff(this.tree, tree);
            this.dom = patch(this.dom, patches);
            console.log('update');
        }
        this.tree = tree;
    }


}
  