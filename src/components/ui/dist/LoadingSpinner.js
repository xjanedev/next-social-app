"use strict";
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var ClipLoader = dynamic_1["default"](function () { return Promise.resolve().then(function () { return require("react-spinners"); }).then(function (lib) { return lib.ClipLoader; }); }, {
    ssr: false
});
function LoadingSpinner(_a) {
    var _b = _a.color, color = _b === void 0 ? "black" : _b;
    return React.createElement(ClipLoader, { color: color });
}
exports["default"] = LoadingSpinner;
