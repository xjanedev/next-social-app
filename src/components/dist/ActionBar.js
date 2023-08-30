"use strict";
exports.__esModule = true;
var BookmarkIcon_1 = require("./ui/icons/BookmarkIcon");
var HeartIcon_1 = require("./ui/icons/HeartIcon");
var date_1 = require("@/util/date");
var react_1 = require("react");
var HeartFillIcon_1 = require("./ui/icons/HeartFillIcon");
var BookmarkFillIcon_1 = require("./ui/icons/BookmarkFillIcon");
var react_2 = require("next-auth/react");
var swr_1 = require("swr");
var ToggleBtn_1 = require("./ui/ToggleBtn");
function ActionBar(_a) {
    var _b;
    var post = _a.post;
    var id = post.id, likes = post.likes, username = post.username, text = post.text, createdAt = post.createdAt;
    var session = react_2.useSession().data;
    var user = session === null || session === void 0 ? void 0 : session.user;
    var liked = user ? likes.includes(user.username) : false;
    var _c = react_1.useState(false), bookmarked = _c[0], setBookmarked = _c[1];
    var mutate = swr_1.useSWRConfig().mutate;
    var handleLike = function (like) {
        fetch("api/likes", {
            method: "PUT",
            body: JSON.stringify({ id: id, like: like })
        }).then(function () { return mutate("/api/post"); });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'flex justify-between my-2 px-4' },
            React.createElement(ToggleBtn_1["default"], { toggled: liked, onToggle: handleLike, onIcon: React.createElement(HeartFillIcon_1["default"], null), offIcon: React.createElement(HeartIcon_1["default"], null) }),
            React.createElement(ToggleBtn_1["default"], { toggled: bookmarked, onToggle: setBookmarked, onIcon: React.createElement(BookmarkFillIcon_1["default"], null), offIcon: React.createElement(BookmarkIcon_1["default"], null) })),
        React.createElement("div", { className: 'px-4 py-1' },
            React.createElement("p", { className: 'text-xs font-bold mb-3' }, ((_b = likes === null || likes === void 0 ? void 0 : likes.length) !== null && _b !== void 0 ? _b : 0) + " " + ((likes === null || likes === void 0 ? void 0 : likes.length) > 1 ? "likes" : "like")),
            text && (React.createElement("p", null,
                React.createElement("span", { className: 'font-bold mr-3' }, username),
                text)),
            React.createElement("p", { className: 'text-xs text-neutral-500 uppercase my-2' }, date_1.parseDate(createdAt)))));
}
exports["default"] = ActionBar;
