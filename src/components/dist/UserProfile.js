"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Profile_1 = require("./ui/Profile");
var FollowBtn_1 = require("./FollowBtn");
function UserProfile(_a) {
    var user = _a.user;
    var image = user.image, username = user.username, name = user.name, followers = user.followers, following = user.following, posts = user.posts;
    var info = [
        { title: "posts", data: posts },
        { title: "followers", data: followers },
        { title: "following", data: following },
    ];
    return (react_1["default"].createElement("section", { className: 'w-full flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-neutral-200' },
        react_1["default"].createElement(Profile_1["default"], { image: image, size: "big" }),
        react_1["default"].createElement("div", { className: 'md:ml-10 basis-1/3' },
            react_1["default"].createElement("h1", { className: 'font-bold text-md my-4' }, username),
            react_1["default"].createElement("ul", { className: 'my-2 flex gap-4' }, info.map(function (_a, index) {
                var title = _a.title, data = _a.data;
                return (react_1["default"].createElement("li", { className: 'text-sm', key: index },
                    react_1["default"].createElement("span", { className: 'px-2 mr-1 bg-gray-100 rounded-full' }, data),
                    title));
            })),
            react_1["default"].createElement("div", { className: 'flex justify-between' },
                react_1["default"].createElement("p", { className: 'text-sm py-2' }, name),
                react_1["default"].createElement(FollowBtn_1["default"], { user: user })))));
}
exports["default"] = UserProfile;
