"use strict";
exports.__esModule = true;
var react_1 = require("react");
var cg_1 = require("react-icons/cg");
var PostGridCard_1 = require("./PostGridCard");
var posts_1 = require("@/hooks/posts");
function PostGrid() {
    var _a = posts_1["default"](), posts = _a.posts, isLoading = _a.isLoading;
    // user 페이지에서 데이터가 정적으로 그대로 남아있는 이슈
    // 경로가 다르다. -> 다른 곳은 /api/post 에서 받아오지만
    // post 라는 데이터는 동일하지만 키가 달라서 user 페이지는 정적으로 남아있다.
    return (react_1["default"].createElement("div", null,
        isLoading && react_1["default"].createElement(cg_1.CgSpinner, { className: 'w-full mt-16 text-center' }),
        react_1["default"].createElement("ul", { className: 'grid grid-cols-3 gap-4 py-4 px-2' }, posts &&
            posts.map(function (post, index) { return (react_1["default"].createElement("li", { key: post.id },
                react_1["default"].createElement(PostGridCard_1["default"], { post: post, priority: index < 6 }))); }))));
}
exports["default"] = PostGrid;
