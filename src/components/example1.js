import { diff, patch, create, h } from "virtual-dom";

export default class Example1 {
    randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render(count) {
        var color =this.randomColor();
        return h('div', {
            id: 'example1',
            style: {
                textAlign: 'center',
                color: '#fff',
                lineHeight: (100 + count) + 'px',
                border: '1px solid red',
                width: (100 + count) + 'px',
                height: (100 + count) + 'px',
                backgroundColor: color
            }
        }, [String(count)]);
    }

    runningFunction(count, tree, rootNode) {
        var newTree = this.render(count);
        var patches = diff(tree, newTree);
        rootNode = patch(rootNode, patches);
        tree = newTree;
    }

    plusFunction(count, tree, rootNode) {
        count++;
        this.runningFunction(count, tree, rootNode);
        if (count < 10) {
            setTimeout(() => {
                this.plusFunction(count, tree, rootNode)
            }, 1000);
        }
    }

    // mainFunction() {
    //     var count = 0;
    //     var tree = this.render(count);
    //     var rootNode = create(tree);
    //     document.getElementById('example1').appendChild(rootNode);
    //     this.plusFunction(count, tree, rootNode);
    // }
}