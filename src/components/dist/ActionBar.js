"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeartIcon_1 = require("./ui/icons/HeartIcon");
var BookmarkIcon_1 = require("./ui/icons/BookmarkIcon");
var date_1 = require("@/util/date");
function ActionBar(_a) {
    var _b;
    var likes = _a.likes, username = _a.username, text = _a.text, createdAt = _a.createdAt;
    return (react_1["default"].createElement("div", { className: 'h-auto' },
        react_1["default"].createElement("div", { className: 'flex justify-between mt-2 px-4' },
            react_1["default"].createElement(HeartIcon_1["default"], null),
            react_1["default"].createElement(BookmarkIcon_1["default"], null)),
        react_1["default"].createElement("div", { className: 'px-4 py-1' },
            react_1["default"].createElement("p", { className: 'text-sm font-bold mb-2' }, ((_b = likes === null || likes === void 0 ? void 0 : likes.length) !== null && _b !== void 0 ? _b : 0) + " " + ((likes === null || likes === void 0 ? void 0 : likes.length) > 1 ? "likes" : "like")),
            react_1["default"].createElement("p", null,
                react_1["default"].createElement("span", { className: 'font-bold mr-3' }, username),
                text),
            react_1["default"].createElement("p", { className: 'text-xs text-neutral-500 uppercase my-2' }, date_1.parseDate(createdAt)))));
}
exports["default"] = ActionBar;
