"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
function ModalPortal(_a) {
    var children = _a.children;
    if (typeof window === "undefined") {
        return null;
    }
    var el = document.getElementById("portal");
    return react_dom_1["default"].createPortal(children, el);
}
exports["default"] = ModalPortal;
