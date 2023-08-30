"use strict";
exports.__esModule = true;
function Profile(_a) {
    var image = _a.image, _b = _a.size, size = _b === void 0 ? "medium" : _b;
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
            return "w-8 h-8";
        case "medium":
            return "w-11 h-11";
        case "big":
            return "w-[72px] h-[72px]";
    }
}
function getImageSizeStyle(size) {
    switch (size) {
        case "small":
            return "w=[32px] h-[32px] p-[0.1rem]";
        case "medium":
            return "w-[40px] h-[40px] p-[0.1rem]";
        case "big":
            return "w-18 h-18 p-[0.2rem]";
    }
}
