"use client";
"use strict";
exports.__esModule = true;
var PostListCard_1 = require("./PostListCard");
var LoadingSpinner_1 = require("./ui/LoadingSpinner");
var posts_1 = require("@/hooks/posts");
function PostList() {
    var _a = posts_1["default"](), posts = _a.posts, loading = _a.isLoading; // 커스텀 훅 사용
    return (React.createElement("div", { className: 'flex justify-center items-center' },
        React.createElement("section", { className: 'w-[580px] pt-9' },
            loading ? (React.createElement("div", { className: 'text-center mt-32' },
                React.createElement(LoadingSpinner_1["default"], { color: 'black' }))) : ((!posts || posts.length === 0) && (React.createElement("p", { className: 'text-center mt-48' }, "you don't have any post yet!"))),
            posts && (React.createElement("ul", null, posts.map(function (post, index) { return (React.createElement("li", { className: 'mb-9', key: post.id },
                React.createElement(PostListCard_1["default"], { post: post, priority: index < 2 }))); }))))));
}
exports["default"] = PostList;
