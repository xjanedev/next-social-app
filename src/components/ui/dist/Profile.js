"use strict";
// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Image from "next/image";
exports.__esModule = true;
function Avatar(_a) {
    var image = _a.image, _b = _a.size, size = _b === void 0 ? "small" : _b, _c = _a.highlight, highlight = _c === void 0 ? false : _c;
    return (React.createElement("div", { className: getContainerStyle(size) },
        React.createElement("img", { className: "bg-white object-cover rounded-full " + getImageSizeStyle(size), alt: 'user profile', src: image !== null && image !== void 0 ? image : undefined, referrerPolicy: 'no-referrer' })));
}
exports["default"] = Avatar;
function getContainerStyle(size) {
    var baseStyle = "rounded-full flex justify-center items-center";
    var sizeStyle = size === "small" ? "w-11 h-11" : "w-[72px] h-[72px]";
    return baseStyle + " " + sizeStyle;
}
function getImageSizeStyle(size) {
    return size === "small"
        ? "w-[36px] h-[36px] p-[0.1rem]"
        : "w-18 h-18 p-[0.2rem] ";
}
