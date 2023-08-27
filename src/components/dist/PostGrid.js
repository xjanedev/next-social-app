"use strict";
exports.__esModule = true;
var react_1 = require("react");
var cg_1 = require("react-icons/cg");
var swr_1 = require("swr");
var PostGridCard_1 = require("./PostGridCard");
function PostGrid(_a) {
    var username = _a.username, query = _a.query;
    var _b = swr_1["default"]("/api/users/" + username + "/" + query), posts = _b.data, isLoading = _b.isLoading, error = _b.error;
    return (react_1["default"].createElement("div", null,
        isLoading && react_1["default"].createElement(cg_1.CgSpinner, { className: 'w-full mt-16 text-center' }),
        react_1["default"].createElement("ul", { className: 'grid grid-cols-3 gap-4 py-4 px-8' }, posts &&
            posts.map(function (post, index) { return (react_1["default"].createElement("li", { key: post.id },
                react_1["default"].createElement(PostGridCard_1["default"], { post: post, priority: index < 6 }))); }))));
}
exports["default"] = PostGrid;
