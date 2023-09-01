"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ToggleButton_1 = require("@/components/ui/ToggleButton");
var me_1 = require("@/hooks/me");
function FollowButton(_a) {
    var user = _a.user;
    var username = user.username;
    var loggedInUser = me_1["default"]().user;
    var showButton = loggedInUser && loggedInUser.username !== username;
    var following = loggedInUser &&
        loggedInUser.following.find(function (item) { return item.username === username; });
    var text = following ? "Unfollow" : "Follow";
    return (react_1["default"].createElement(react_1["default"].Fragment, null, showButton && (react_1["default"].createElement(ToggleButton_1["default"], { text: text, onClick: function () { }, black: text === "Unfollow" }))));
}
exports["default"] = FollowButton;
