"use strict";
exports.__esModule = true;
var HeartIcon_1 = require("./ui/icons/HeartIcon");
var BookmarkIcon_1 = require("./ui/icons/BookmarkIcon");
var date_1 = require("@/util/date");
var react_1 = require("react");
var ToggleBtn_1 = require("./ui/ToggleBtn");
var HeartFillIcon_1 = require("./ui/icons/HeartFillIcon");
var BookmarkFillIcon_1 = require("./ui/icons/BookmarkFillIcon");
function ActionBar(_a) {
    var _b;
    var likes = _a.likes, username = _a.username, text = _a.text, createdAt = _a.createdAt;
    var _c = react_1.useState(false), liked = _c[0], setLiked = _c[1];
    var _d = react_1.useState(false), bookmarked = _d[0], setBookmarked = _d[1];
    return (React.createElement("div", { className: 'h-auto' },
        React.createElement("div", { className: 'flex justify-between mt-2 px-4' },
            React.createElement(ToggleBtn_1["default"], { toggled: liked, onToggle: setLiked, onIcon: React.createElement(HeartFillIcon_1["default"], null), offIcon: React.createElement(HeartIcon_1["default"], null) }),
            React.createElement(ToggleBtn_1["default"], { toggled: bookmarked, onToggle: setBookmarked, onIcon: React.createElement(BookmarkFillIcon_1["default"], null), offIcon: React.createElement(BookmarkIcon_1["default"], null) })),
        React.createElement("div", { className: 'px-4 py-1' },
            React.createElement("p", { className: 'text-xs font-bold mb-3' }, ((_b = likes === null || likes === void 0 ? void 0 : likes.length) !== null && _b !== void 0 ? _b : 0) + " " + ((likes === null || likes === void 0 ? void 0 : likes.length) > 1 ? "likes" : "like")),
            text && (React.createElement("p", null,
                React.createElement("span", { className: 'font-bold mr-3' }, username),
                text)),
            React.createElement("p", { className: 'text-xs text-neutral-500 uppercase my-2' }, date_1.parseDate(createdAt)))));
}
exports["default"] = ActionBar;
