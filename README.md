Flow:

create virtual dom 1 (vdom1) --> create the root DOM (root) based on vdom1
create virtual dom 2 (vdom2)
compare two virtual dom --> patches = diff(vdom1, vdom2) --> have the patches that will be updated to real DOM
update root DOM --> root = patch(root, patches)
