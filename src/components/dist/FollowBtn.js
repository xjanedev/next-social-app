"use client";
"use strict";
exports.__esModule = true;
var me_1 = require("@/hooks/me");
var ToggleButton_1 = require("./ui/ToggleButton");
function FollowButton(_a) {
    var user = _a.user;
    var username = user.username;
    var _b = me_1["default"](), loggedInUser = _b.user, toggleFollow = _b.toggleFollow;
    var showButton = loggedInUser && loggedInUser.username !== username;
    var following = loggedInUser &&
        loggedInUser.following.find(function (item) { return item.username === username; });
    var text = following ? "Unfollow" : "Follow";
    var handleFollow = function () {
        toggleFollow(user.id, !following);
    };
    return (React.createElement(React.Fragment, null, showButton && (React.createElement(ToggleButton_1["default"], { text: text, onClick: handleFollow, black: text === "Unfollow" }))));
}
exports["default"] = FollowButton;
