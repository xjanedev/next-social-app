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
var CommentForm_1 = require("./CommentForm");
function ActionBar(_a) {
    var _b, _c;
    var post = _a.post, children = _a.children, onComment = _a.onComment;
    var id = post.id, likes = post.likes, createdAt = post.createdAt;
    var _d = me_1["default"](), user = _d.user, setBookmark = _d.setBookmark;
    var setLike = posts_1["default"]().setLike;
    var liked = user ? likes.includes(user.username) : false;
    var bookmarked = (_b = user === null || user === void 0 ? void 0 : user.bookmarks.includes(id)) !== null && _b !== void 0 ? _b : false;
    var handleLike = function (like) {
        user && setLike(post, user.username, like);
    };
    var handleBookmark = function (bookmark) {
        user && setBookmark(id, bookmark);
    };
    var handleComment = function (comment) {
        user && onComment({ comment: comment, username: user.username, image: user.image });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'flex justify-between px-3' },
            React.createElement(ToggleBtn_1["default"], { toggled: liked, onToggle: handleLike, onIcon: React.createElement(HeartFillIcon_1["default"], null), offIcon: React.createElement(HeartIcon_1["default"], null) }),
            React.createElement(ToggleBtn_1["default"], { toggled: bookmarked, onToggle: handleBookmark, onIcon: React.createElement(BookmarkFillIcon_1["default"], null), offIcon: React.createElement(BookmarkIcon_1["default"], null) })),
        React.createElement("div", { className: 'px-4 py-1 text-sm' },
            React.createElement("p", { className: 'text-xs font-bold mb-3' }, ((_c = likes === null || likes === void 0 ? void 0 : likes.length) !== null && _c !== void 0 ? _c : 0) + " " + ((likes === null || likes === void 0 ? void 0 : likes.length) > 1 ? "likes" : "like")),
            children,
            React.createElement("p", { className: 'text-xs text-neutral-500 uppercase my-2' }, date_1.parseDate(createdAt))),
        React.createElement(CommentForm_1["default"], { onPostComment: handleComment })));
}
exports["default"] = ActionBar;
