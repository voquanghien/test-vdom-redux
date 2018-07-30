export default class Thunk {

    constructor(renderFn, cmpFn, state) {
        this.renderFn = renderFn
        this.cmpFn = cmpFn
        this.state = state
        this.type = "Thunk";
    }
    
    render(previous) {
        // The first time the Thunk renders, there will be no previous state
        let previousState = previous ? previous.state : null
        // We run the comparison function to see if the state has changed enough
        // for us to re-render. If it returns truthy, then we call the render
        // function to give us a new VNode
        if ((!previousState || !this.state) || this.cmpFn(previousState, this.state)) {
            console.log('thunk render');
            return this.renderFn(previous, this);
        } else {
        // vnode will be set automatically when a thunk has been created
        // it contains the VNode, VText, Thunk, or Widget generated by
        // our render function.
            console.log('previous');
            return previous.vnode;
        }
    }
}