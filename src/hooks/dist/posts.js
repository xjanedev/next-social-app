"use strict";
exports.__esModule = true;
var swr_1 = require("swr");
function usePosts() {
    var _a = swr_1["default"]("/api/post"), posts = _a.data, isLoading = _a.isLoading, error = _a.error;
    var setLike = function (post, username, like) {
        fetch("/api/likes", {
            method: "PUT",
            body: JSON.stringify({ id: post.id, like: like })
        }).then(function () { return swr_1.mutate("/api/post"); });
    };
    return { posts: posts, isLoading: isLoading, error: error, setLike: setLike };
}
exports["default"] = usePosts;
