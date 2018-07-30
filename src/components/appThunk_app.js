import { diff, patch, create, h } from "virtual-dom";
import thunkEx1 from "./thunkEx1";
import thunkEx2 from "./thunkEx2"

export default class AppThunk {
    constructor(root) {
      this.root = root;
    }
    
    render() {
      // TODO: render your app's tree here
      return h("div", {id:"thunkEx"}, [new thunkEx1(), new thunkEx2()]);
    }
  
    update() {
        console.log(this.root)
        let tree = this.render();
        let dom = create(tree);
        document.getElementById(this.root).appendChild(dom);
        console.log('init');
    }
}
  