"use strict";
exports.__esModule = true;
var Profile_1 = require("./Profile");
function PostUserProfile(_a) {
    var image = _a.image, username = _a.username;
    return (React.createElement("div", { className: 'flex items-center p-2' },
        React.createElement(Profile_1["default"], { image: image, size: 'medium' }),
        React.createElement("span", { className: 'text-gray-900 font-bold ml-2' }, username)));
}
exports["default"] = PostUserProfile;
