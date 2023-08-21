"use client";
"use strict";
exports.__esModule = true;
var swr_1 = require("swr");
function PostList() {
    var _a = swr_1["default"]("/api/post"), posts = _a.data, loading = _a.isLoading;
    console.log(posts);
    return (React.createElement("ul", null, posts && posts.map(function (post) { return React.createElement("li", { key: post.id }, post.text); })));
}
exports["default"] = PostList;
