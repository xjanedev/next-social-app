"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_multi_carousel_1 = require("react-multi-carousel");
require("react-multi-carousel/lib/styles.css");
var responsive = {
    desk: {
        breakpoint: { max: 1920, min: 576 },
        items: 6
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 5
    }
};
function ScrollableBar(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_multi_carousel_1["default"], { containerClass: 'w-full gap-2', responsive: responsive }, children));
}
exports["default"] = ScrollableBar;
