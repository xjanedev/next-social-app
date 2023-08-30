"use strict";
exports.__esModule = true;
function ToggleBtn(_a) {
    var toggled = _a.toggled, onToggle = _a.onToggle, onIcon = _a.onIcon, offIcon = _a.offIcon;
    return (React.createElement("button", { onClick: function () { return onToggle(!toggled); } }, toggled ? onIcon : offIcon));
}
exports["default"] = ToggleBtn;
