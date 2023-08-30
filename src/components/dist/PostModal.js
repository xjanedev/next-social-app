"use strict";
exports.__esModule = true;
var ClosedIcon_1 = require("./ui/icons/ClosedIcon");
function PostModal(_a) {
    var onClose = _a.onClose, children = _a.children;
    return (React.createElement("section", { className: 'fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70', onClick: function (event) {
            if (event.target === event.currentTarget) {
                onClose();
            }
        } },
        React.createElement("button", { className: 'fixed top-0 right-0 p-8 text-white', onClick: function () { return onClose(); } },
            React.createElement(ClosedIcon_1["default"], null)),
        React.createElement("div", { className: 'bg-white w-[580px] h-[700px] max-w-7xl rounded-3xl' }, children)));
}
exports["default"] = PostModal;
