"use client";
"use strict";
exports.__esModule = true;
var swr_1 = require("swr");
var PostListCard_1 = require("./PostListCard");
var LoadingSpinner_1 = require("./ui/LoadingSpinner");
function PostList() {
    var _a = swr_1["default"]("/api/post"), posts = _a.data, loading = _a.isLoading;
    console.log(posts);
    return (React.createElement("div", { className: 'flex justify-center items-center' },
        React.createElement("section", { className: 'w-[580px] mt-4' },
            loading && (React.createElement("div", { className: 'text-center mt-32' },
                React.createElement(LoadingSpinner_1["default"], { color: 'black' }))),
            posts && (React.createElement("ul", null, posts.map(function (post) { return (React.createElement("li", { className: 'mb-9', key: post.id },
                React.createElement(PostListCard_1["default"], { post: post, priority: index < 2 }))); }))))));
}
exports["default"] = PostList;
