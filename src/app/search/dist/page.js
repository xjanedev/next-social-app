"use strict";
exports.__esModule = true;
exports.metadata = exports.dynamic = void 0;
var UserSearch_1 = require("@/components/UserSearch");
exports.dynamic = "force-dynamic";
exports.metadata = {
    title: "user search",
    description: "search users to follow"
};
function SearchPage() {
    return React.createElement(UserSearch_1["default"], null);
}
exports["default"] = SearchPage;
