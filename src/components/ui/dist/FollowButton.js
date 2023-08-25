"use client";
"use strict";
exports.__esModule = true;
function Button(_a) {
    var text = _a.text, onClick = _a.onClick, black = _a.black;
    return (React.createElement("button", { className: "border-none rounded-md py-2 px-8 text-white font-bold leading-4 " + (black ? "bg-black" : "bg-gray-500") }, text));
}
exports["default"] = Button;
