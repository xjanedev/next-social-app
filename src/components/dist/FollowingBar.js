"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var swr_1 = require("swr");
var react_spinners_1 = require("react-spinners");
var link_1 = require("next/link");
var Profile_1 = require("./ui/Profile");
var ScrollableBar_1 = require("./ui/ScrollableBar");
function FollowingBar() {
    var _a = swr_1["default"]("/api/me"), data = _a.data, loading = _a.isLoading, error = _a.error;
    var users = data === null || data === void 0 ? void 0 : data.following;
    // following 이 많을때 상황
    // const users = data?.following && [
    //   ...data?.following,
    //   ...data?.following,
    //   ...data?.following,
    // ];
    return (react_1["default"].createElement("section", { className: 'w-full flex justify-center items-center p-4 border-b mb-4 min-h-[90px]' },
        loading ? (react_1["default"].createElement(react_spinners_1.ClipLoader, { size: 24, color: 'black' })) : ((!users || users.length === 0) && react_1["default"].createElement("p", null, "find your friends!")),
        users && users.length > 0 && (react_1["default"].createElement(ScrollableBar_1["default"], null, users.map(function (_a) {
            var image = _a.image, username = _a.username;
            return (react_1["default"].createElement(link_1["default"], { key: username, className: 'flex flex-col items-center w-20', href: "/user/" + username },
                react_1["default"].createElement(Profile_1["default"], { image: image }),
                react_1["default"].createElement("p", { className: 'w-full text-sm text-ellipsis overflow-hidden' }, username)));
        })))));
}
exports["default"] = FollowingBar;
