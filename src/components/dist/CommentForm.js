"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CommentForm() {
    return (react_1["default"].createElement("form", { className: 'flex items-center border-t border-neutral-300' },
        react_1["default"].createElement("input", { className: 'w-full text-sm ml-6 border-none outline-none p-3', type: 'text', placeholder: 'Add a comment...' }),
        react_1["default"].createElement("button", { className: 'font-bold text-gray-900 mr-8' }, "post")));
}
exports["default"] = CommentForm;
