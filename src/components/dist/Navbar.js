"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var icons_1 = require("./ui/icons");
var navigation_1 = require("next/navigation");
var Button_1 = require("./ui/Button");
var react_1 = require("next-auth/react");
var Profile_1 = require("./ui/Profile");
var menu = [
    {
        href: "/search",
        icon: React.createElement(icons_1.SearchIcon, null),
        clickedIcon: React.createElement(icons_1.SearchFillIcon, null)
    },
    {
        href: "/newpost",
        icon: React.createElement(icons_1.NewIcon, null),
        clickedIcon: React.createElement(icons_1.NewFillIcon, null)
    },
];
function Navbar() {
    var session = react_1.useSession().data;
    var path = navigation_1.usePathname();
    var user = session === null || session === void 0 ? void 0 : session.user;
    return (React.createElement("div", { className: 'flex justify-between items-center px-8' },
        React.createElement(link_1["default"], { href: '/' },
            React.createElement("h1", { className: 'text-2xl font-bold' }, "\uD83D\uDCD3")),
        React.createElement("nav", null,
            React.createElement("ul", { className: 'flex gap-4 items-center p-4' },
                menu.map(function (_a) {
                    var href = _a.href, icon = _a.icon, clickedIcon = _a.clickedIcon;
                    return (React.createElement("li", { key: href },
                        React.createElement(link_1["default"], { href: href }, href === path ? clickedIcon : icon)));
                }),
                user && (React.createElement("li", null,
                    React.createElement(link_1["default"], { href: "/user/" + user.username },
                        React.createElement(Profile_1["default"], { image: user.image })))),
                React.createElement("li", null, session ? (React.createElement(Button_1["default"], { text: 'Sign out', onClick: function () { return react_1.signOut(); }, size: "small" })) : (React.createElement(Button_1["default"], { text: 'Sign In', onClick: function () { return react_1.signIn(); }, size: "small" })))))));
}
exports["default"] = Navbar;
