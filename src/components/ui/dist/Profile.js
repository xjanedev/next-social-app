"use strict";
// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Image from "next/image";
exports.__esModule = true;
function Profile(_a) {
    var image = _a.image, _b = _a.size, size = _b === void 0 ? "medium" : _b, _c = _a.highlight, highlight = _c === void 0 ? false : _c;
    return (React.createElement("div", { className: getContainerStyle(size) },
        React.createElement("img", { className: "bg-white object-cover rounded-full " + getImageSizeStyle(size), alt: 'user profile', src: image !== null && image !== void 0 ? image : undefined, referrerPolicy: 'no-referrer' })));
}
exports["default"] = Profile;
// sizestyle 함수화
function getContainerStyle(size) {
    var baseStyle = "rounded-full flex justify-center items-center";
    var sizeStyle = getContainerSize(size);
    return baseStyle + " " + sizeStyle;
}
function getContainerSize(size) {
    switch (size) {
        case "small":
            return "w-9 h-9";
        case "medium":
            return "w-11 h-11";
        case "large":
            return "w-[72px] h-[72px]";
    }
}
function getImageSizeStyle(size) {
    switch (size) {
        case "small":
            return "w=[34px] h-[34px] p-[0.1rem]";
        case "medium":
            return "w-[42px] h-[42px] p-[0.1rem]";
        case "large":
            return "w-18 h-18 p-[0.2rem]";
    }
}
