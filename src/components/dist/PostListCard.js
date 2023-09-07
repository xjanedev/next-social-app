"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var ActionBar_1 = require("./ActionBar");
var ModalPortal_1 = require("./ui/ModalPortal");
var PostModal_1 = require("./PostModal");
var PostDetail_1 = require("./PostDetail");
var PostUserProfile_1 = require("./ui/PostUserProfile");
var posts_1 = require("@/hooks/posts");
function PostListCard(_a) {
    var post = _a.post, _b = _a.priority, priority = _b === void 0 ? false : _b;
    var userImage = post.userImage, username = post.username, image = post.image, text = post.text, comments = post.comments;
    var _c = react_1.useState(false), openModal = _c[0], setOpenModal = _c[1];
    var postComment = posts_1["default"]().postComment;
    var handlePostComment = function (comment) {
        postComment(post, comment);
    };
    return (React.createElement("article", { className: 'rounded-3xl border border-gray-20' },
        React.createElement(PostUserProfile_1["default"], { image: userImage, username: username }),
        React.createElement(image_1["default"], { className: 'w-[580px] h-[500px] rounded-3xl object-cover aspect-square p-3', src: image, alt: "photo by " + username, width: 500, height: 500, priority: priority, onClick: function () { return setOpenModal(true); } }),
        React.createElement(ActionBar_1["default"], { post: post, onComment: handlePostComment },
            React.createElement("p", null,
                React.createElement("span", { className: 'font-bold mr-1' }, username),
                text),
            comments > 1 && (React.createElement("button", { className: 'font-bold my-2 text-gray-900', onClick: function () { return setOpenModal(true); } }, "View all " + comments + " comments"))),
        openModal && (React.createElement(ModalPortal_1["default"], null,
            React.createElement(PostModal_1["default"], { onClose: function () { return setOpenModal(false); } },
                React.createElement(PostDetail_1["default"], { post: post }))))));
}
exports["default"] = PostListCard;
