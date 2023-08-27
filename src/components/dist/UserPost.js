"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BookmarkIcon_1 = require("./ui/icons/BookmarkIcon");
var HeartIcon_1 = require("./ui/icons/HeartIcon");
var PostIcon_1 = require("./ui/icons/PostIcon");
var PostGrid_1 = require("./PostGrid");
var tabs = [
    { type: "posts", icon: React.createElement(PostIcon_1["default"], null) },
    { type: "liked", icon: React.createElement(HeartIcon_1["default"], { className: 'w-3 h-3' }) },
    { type: "saved", icon: React.createElement(BookmarkIcon_1["default"], { className: 'w-3 h-3' }) },
];
function UserPost(_a) {
    var username = _a.user.username;
    var _b = react_1.useState(tabs[0].type), query = _b[0], setQuery = _b[1];
    return (React.createElement("section", null,
        React.createElement("ul", { className: 'flex justify-center uppercase' }, tabs.map(function (_a) {
            var type = _a.type, icon = _a.icon;
            return (React.createElement("li", { className: "mx-10 p-3 cursor-pointer border-x-black " + (type === query && "font-bold border-t"), key: type, onClick: function () { return setQuery(type); } },
                React.createElement("button", { className: 'scale-150 md:scale-100' }, icon),
                React.createElement("span", { className: 'hidden md:inline' }, type)));
        })),
        React.createElement(PostGrid_1["default"], { username: username, query: query })));
}
exports["default"] = UserPost;