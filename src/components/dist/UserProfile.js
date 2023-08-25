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
    return (react_1["default"].createElement("section", null,
        react_1["default"].createElement(Profile_1["default"], { image: image }),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", null, username),
            react_1["default"].createElement(FollowBtn_1["default"], { user: user }),
            react_1["default"].createElement("ul", null, info.map(function (_a, index) {
                var title = _a.title, data = _a.data;
                return (react_1["default"].createElement("li", { key: index },
                    react_1["default"].createElement("span", null, data),
                    title));
            })),
            react_1["default"].createElement("p", null, name))));
}
exports["default"] = UserProfile;
