"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CommentForm(_a) {
    var onPostComment = _a.onPostComment;
    var _b = react_1.useState(""), comment = _b[0], setComment = _b[1];
    var buttonDisabled = comment.length === 0;
    var handleSubmit = function (e) {
        e.preventDefault();
        onPostComment(comment);
        setComment("");
    };
    return (React.createElement("form", { onSubmit: handleSubmit, className: 'flex items-center px-6 border-t border-neutral-300' },
        React.createElement("input", { className: 'w-full text-xs border-none outline-none p-4', type: 'text', placeholder: 'Add a comment...', required: true, value: comment, onChange: function (e) { return setComment(e.target.value); } }),
        React.createElement("button", { disabled: buttonDisabled, className: "font-bold mr-2 text-sm " + (buttonDisabled ? "text-gray-300" : "text-gray-900") }, "post")));
}
exports["default"] = CommentForm;
