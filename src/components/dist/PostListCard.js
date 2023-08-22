"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Profile_1 = require("@/components/ui/Profile");
var image_1 = require("next/image");
var CommentForm_1 = require("./CommentForm");
var ActionBar_1 = require("./ActionBar");
function PostListCard(_a) {
    var post = _a.post;
    var userImage = post.userImage, username = post.username, image = post.image, createdAt = post.createdAt, likes = post.likes, text = post.text;
    return (react_1["default"].createElement("article", { className: 'rounded-3xl border border-gray-20' },
        react_1["default"].createElement("div", { className: 'flex items-center p-2' },
            react_1["default"].createElement(Profile_1["default"], { image: userImage, size: 'medium' }),
            react_1["default"].createElement("span", { className: 'text-gray-900 font-bold ml-2' }, username)),
        react_1["default"].createElement(image_1["default"], { className: 'w-[580px] object-cover aspect-square', src: image, alt: "photo by " + username, width: 500, height: 500 }),
        react_1["default"].createElement(ActionBar_1["default"], { likes: likes, username: username, text: text, createdAt: createdAt }),
        react_1["default"].createElement(CommentForm_1["default"], null)));
}
exports["default"] = PostListCard;
