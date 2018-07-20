import { diff, patch, create, h } from "virtual-dom";
import Example1 from "./example1";

export default class App {
    constructor(props) {
      this.props = props;
    }
  
    render() {
      // TODO: render your app's tree here
      return h("div", new Example1().render(1));
    }
  
    update() {
      let tree = this.render();
      if (!this.dom) {
        this.dom = create(tree);
        document.getElementById(this.props.appId).appendChild(this.dom);
      } else {
        new Example1().mainFunction();
        let patches = diff(this.tree, tree);
        this.dom = patch(this.dom, patches);
      }
      this.tree = tree;
    }
  }
  