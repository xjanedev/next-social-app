"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var Navbar_1 = require("@/components/Navbar");
require("./globals.css");
var google_1 = require("next/font/google");
var AuthContext_1 = require("@/context/AuthContext");
var SWRConfigContext_1 = require("@/context/SWRConfigContext");
var NotoSans = google_1.Noto_Sans({
    subsets: ["latin"],
    weight: "400"
});
exports.metadata = {
    title: {
        "default": "photodairy",
        template: "photodairy | %s"
    },
    description: "photos"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: 'en', className: NotoSans.className },
        React.createElement("body", { className: 'w-full max-w-screen-xl overflow-auto mx-auto' },
            React.createElement(AuthContext_1["default"], null,
                React.createElement("header", { className: 'sticky top-0 bg-white border-b' },
                    React.createElement(Navbar_1["default"], null)),
                React.createElement("main", null,
                    React.createElement(SWRConfigContext_1["default"], null, children))),
            React.createElement("div", { id: 'portal' }))));
}
exports["default"] = RootLayout;
