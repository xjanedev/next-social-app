"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var ModalPortal_1 = require("./ui/ModalPortal");
var PostDetail_1 = require("./PostDetail");
var PostModal_1 = require("./PostModal");
var react_1 = require("react");
function PostGridCard(_a) {
    var post = _a.post, _b = _a.priority, priority = _b === void 0 ? false : _b;
    var _c = react_1.useState(false), openModal = _c[0], setOpenModal = _c[1];
    var image = post.image, username = post.username;
    return (React.createElement("div", { className: 'relative w-full aspect-square' },
        React.createElement(image_1["default"], { className: 'object-cover', src: image, alt: "photo by " + username, fill: true, sizes: '650px', priority: priority }),
        openModal && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(PostModal_1["default"], { onClose: function () { return setOpenModal(false); } },
                React.createElement(PostDetail_1["default"], { post: post }))))));
}
exports["default"] = PostGridCard;
