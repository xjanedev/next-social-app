"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var Profile_1 = require("./ui/Profile");
function UserCard(_a) {
    var _b = _a.user, name = _b.name, username = _b.username, image = _b.image, following = _b.following, followers = _b.followers;
    return (React.createElement(link_1["default"], { href: "/user/" + username, className: 'flex items-center w-full rounded-3xl border border-neutral-300 mb-2 p-4 bg-white hover:bg-neutral-50 ' },
        React.createElement(Profile_1["default"], { image: image }),
        React.createElement("div", { className: 'text-neutral-400 flex ml-4' },
            React.createElement("p", { className: 'text-black font-bold mr-4' }, username),
            React.createElement("p", null, name))));
}
exports["default"] = UserCard;
