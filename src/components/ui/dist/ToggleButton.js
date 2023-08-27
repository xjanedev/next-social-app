"use strict";
exports.__esModule = true;
function ToggleButton(_a) {
    var text = _a.text, onClick = _a.onClick, black = _a.black;
    return (React.createElement("button", { className: "border-none rounded-3xl py-2 px-2 text-sm text-white leading-4 " + (black ? "bg-black" : "bg-gray-300") }, text));
}
exports["default"] = ToggleButton;
