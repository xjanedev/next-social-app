"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Profile_1 = require("@/components/ui/Profile");
var image_1 = require("next/image");
var CommentForm_1 = require("./CommentForm");
var ActionBar_1 = require("./ActionBar");
function PostListCard(_a) {
    var post = _a.post, _b = _a.priority, priority = _b === void 0 ? false : _b;
    var userImage = post.userImage, username = post.username, image = post.image, createdAt = post.createdAt, likes = post.likes, text = post.text;
    return (react_1["default"].createElement("article", { className: 'rounded-3xl border border-gray-20' },
        react_1["default"].createElement("div", { className: 'flex items-center p-3 mb-[-14px]' },
            react_1["default"].createElement(Profile_1["default"], { image: userImage, size: 'medium' }),
            react_1["default"].createElement("span", { className: 'text-gray-900 font-bold ml-2' }, username)),
        react_1["default"].createElement(image_1["default"], { className: 'w-[580px] h-[500px] rounded-3xl object-cover aspect-square p-3', src: image, alt: "photo by " + username, width: 500, height: 500, property: priority }),
        react_1["default"].createElement(ActionBar_1["default"], { likes: likes, username: username, text: text, createdAt: createdAt }),
        react_1["default"].createElement(CommentForm_1["default"], null)));
}
exports["default"] = PostListCard;
