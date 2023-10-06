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
            return "w-10 h-10";
        case "big":
            return "w-20 h-20";
    }
}
function getImageSizeStyle(size) {
    switch (size) {
        case "small":
            return "w=[26px] h-[26px] p-[0.1rem]";
        case "medium":
            return "w-[30px] h-[30px]";
        case "big":
            return "w=[40px] h-[80px]";
    }
}
