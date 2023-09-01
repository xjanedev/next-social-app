"use strict";
exports.__esModule = true;
var BookmarkIcon_1 = require("./ui/icons/BookmarkIcon");
var HeartIcon_1 = require("./ui/icons/HeartIcon");
var date_1 = require("@/util/date");
var HeartFillIcon_1 = require("./ui/icons/HeartFillIcon");
var BookmarkFillIcon_1 = require("./ui/icons/BookmarkFillIcon");
var ToggleBtn_1 = require("./ui/ToggleBtn");
var posts_1 = require("@/hooks/posts");
var me_1 = require("@/hooks/me");
function ActionBar(_a) {
    var _b;
    var post = _a.post;
    var id = post.id, likes = post.likes, username = post.username, text = post.text, createdAt = post.createdAt;
    var _c = me_1["default"](), user = _c.user, setBookmark = _c.setBookmark;
    var setLike = posts_1["default"]().setLike;
    var liked = user ? likes.includes(user.username) : false;
    var bookmarked = user && user.bookmarks && user.bookmarks.includes(id);
    var handleLike = function (like) {
        user && setLike(post, user.username, like);
    };
    var handleBookmark = function (bookmark) {
        user && setBookmark(id, bookmark);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'flex justify-between my-2 px-4' },
            React.createElement(ToggleBtn_1["default"], { toggled: liked, onToggle: handleLike, onIcon: React.createElement(HeartFillIcon_1["default"], null), offIcon: React.createElement(HeartIcon_1["default"], null) }),
            React.createElement(ToggleBtn_1["default"], { toggled: bookmarked, onToggle: handleBookmark, onIcon: React.createElement(BookmarkFillIcon_1["default"], null), offIcon: React.createElement(BookmarkIcon_1["default"], null) })),
        React.createElement("div", { className: 'px-4 py-1' },
            React.createElement("p", { className: 'text-xs font-bold mb-3' }, ((_b = likes === null || likes === void 0 ? void 0 : likes.length) !== null && _b !== void 0 ? _b : 0) + " " + ((likes === null || likes === void 0 ? void 0 : likes.length) > 1 ? "likes" : "like")),
            text && (React.createElement("p", null,
                React.createElement("span", { className: 'font-bold mr-3' }, username),
                text)),
            React.createElement("p", { className: 'text-xs text-neutral-500 uppercase my-2' }, date_1.parseDate(createdAt)))));
}
exports["default"] = ActionBar;
