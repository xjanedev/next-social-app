"use strict";
exports.__esModule = true;
function Button(_a) {
    var text = _a.text, onClick = _a.onClick, red = _a.red, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (React.createElement("button", { className: "border-none rounded-full py-2 px-4 text-white text-sm leading-3 " + (red ? "bg-black" : "bg-gray-300") + " " + (disabled && "opacity-80"), onClick: function () { return onClick(); }, disabled: disabled }, text));
}
exports["default"] = Button;
