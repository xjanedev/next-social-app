"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Profile_1 = require("@/components/ui/Profile");
var image_1 = require("next/image");
var HeartIcon_1 = require("./ui/icons/HeartIcon");
var BookmarkIcon_1 = require("./ui/icons/BookmarkIcon");
var date_1 = require("@/util/date");
function PostListCard(_a) {
    var _b;
    var post = _a.post;
    var userImage = post.userImage, username = post.username, image = post.image, createdAt = post.createdAt, likes = post.likes, text = post.text;
    return (react_1["default"].createElement("article", { className: 'rounded-3xl border border-gray-20' },
        react_1["default"].createElement("div", { className: 'flex items-center p-2' },
            react_1["default"].createElement(Profile_1["default"], { image: userImage, size: 'medium' }),
            react_1["default"].createElement("span", { className: 'text-gray-900 font-bold ml-2' }, username)),
        react_1["default"].createElement(image_1["default"], { className: 'w-[580px] object-cover aspect-square', src: image, alt: "photo by " + username, width: 500, height: 500 }),
        react_1["default"].createElement("div", { className: 'flex justify-between mt-2 px-4' },
            react_1["default"].createElement(HeartIcon_1["default"], null),
            react_1["default"].createElement(BookmarkIcon_1["default"], null)),
        react_1["default"].createElement("div", { className: 'px-4 py-1' },
            react_1["default"].createElement("p", { className: 'text-sm font-bold mb-2' }, ((_b = likes === null || likes === void 0 ? void 0 : likes.length) !== null && _b !== void 0 ? _b : 0) + " " + ((likes === null || likes === void 0 ? void 0 : likes.length) > 1 ? "likes" : "like")),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("span", { className: 'font-bold mr-3' }, username),
                text),
            react_1["default"].createElement("p", { className: 'text-xs text-neutral-500 uppercase my-2' }, date_1.parseDate(createdAt)),
            react_1["default"].createElement("form", { className: 'flex items-center border-t border-neutral-300' },
                react_1["default"].createElement("input", { className: 'w-full ml-2 border-none outline-none p-3', type: 'text', placeholder: 'Add a comment...' }),
                react_1["default"].createElement("button", { className: 'font-bold text-gray-900 ml-4' }, "post")))));
}
exports["default"] = PostListCard;
