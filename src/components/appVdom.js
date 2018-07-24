import { diff, patch, create, h } from "virtual-dom";
import vdomEx from "./vdomEx";
import comFunc from "../common/comFunc";

let count = 0;
let bgc = "#000";

export default class AppVdom {
    constructor(root) {
        this.root = root;
    }

    update() {
        let tree = new vdomEx().render(count, bgc);
        if (!this.dom) {
            this.dom = create(tree);
            document.getElementById(this.root).appendChild(this.dom);
            console.log('init');
        } else {
            let patches = diff(this.tree, tree);
            this.dom = patch(this.dom, patches);
            console.log('update');
        }
        this.tree = tree;   
    }

    main() {
        this.update();
        count++;
        bgc = new comFunc().randomColor();
        setTimeout(() => {
            this.main();
        }, 1000);
    }
}