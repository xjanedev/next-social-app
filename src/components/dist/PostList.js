"use client";
"use strict";
exports.__esModule = true;
var react_spinners_1 = require("react-spinners");
var swr_1 = require("swr");
var PostListCard_1 = require("./PostListCard");
function PostList() {
    var _a = swr_1["default"]("/api/post"), posts = _a.data, loading = _a.isLoading;
    console.log(posts);
    return (React.createElement("div", { className: 'flex justify-center items-center' },
        React.createElement("section", { className: 'w-[580px] mt-4' },
            loading && (React.createElement("div", { className: 'text-center mt-32' },
                React.createElement(react_spinners_1.ClipLoader, { color: 'black' }))),
            posts && (React.createElement("ul", null, posts.map(function (post) { return (React.createElement("li", { className: 'mb-9', key: post.id },
                React.createElement(PostListCard_1["default"], { post: post }))); }))))));
}
exports["default"] = PostList;
