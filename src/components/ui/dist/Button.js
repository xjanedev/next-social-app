"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Button(_a) {
    var text = _a.text, onClick = _a.onClick, size = _a.size;
    return (react_1["default"].createElement("div", { className: "" + (size === "big" ? "p-[0.3rem]" : "p-[0.25rem]") },
        react_1["default"].createElement("button", { className: 'border-2 border-black  hover:bg-gray-200 rounded-full text-sm p-[0.4rem]', onClick: onClick }, text)));
}
exports["default"] = Button;
