import isEqual from "lodash/isEqual";

/**
 * Thunks allow the user to take control of the diff'ing process for a specific dom tree,
 * usually to avoid doing calculations you know are unneeded, such as diff'ing a tree you know hasn't changed.
 * More: {@link https://github.com/Matt-Esch/virtual-dom/blob/master/docs/thunk.md Thunk}
 * @memberof module:core
 */
class defaultThunk {
  constructor() {
    this.type = "Thunk";
  }

  /**
   * Make a check base on two thunk's state to decide whether to re-render.
   * If there is nothing to update, return previous thunk.
   * Lodash's `isEqual` is used to check for equality.
   * @method module:core.Thunk#shouldUpdate
   * @param {Thunk} previous Previous thunk instance
   * @returns {boolean}
   */
  shouldUpdate(previous) {
    if (!this.state || !previous || !previous.state) {
      return true;
    }
    console.log("update");
    return !isEqual(previous.state, this.state);
  }

  render(previous = undefined) {
    console.log('init');
    if (!this.shouldUpdate(previous)) {
      return previous.vnode;
    }
  }
}

export { defaultThunk };
