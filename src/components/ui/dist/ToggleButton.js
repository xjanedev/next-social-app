"use strict";
exports.__esModule = true;
function ToggleButton(_a) {
    var text = _a.text, onClick = _a.onClick, gray = _a.gray, _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return (React.createElement("button", { className: "border-none rounded-full py-2 px-4 text-white text-sm font-bold leading-4 " + (gray ? "bg-gray-300" : "bg-gray-900") + " " + (disabled && "opacity-90"), onClick: function () { return onClick(); }, disabled: disabled }, text));
}
exports["default"] = ToggleButton;
