"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var PostUserProfile_1 = require("./ui/PostUserProfile");
var Button_1 = require("./ui/Button");
var cg_1 = require("react-icons/cg");
function NewPost(_a) {
    var _b = _a.user, username = _b.username, image = _b.image;
    var _c = react_1.useState(false), dragging = _c[0], setDragging = _c[1];
    var _d = react_1.useState(), file = _d[0], setFile = _d[1];
    var _e = react_1.useState(false), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(), error = _f[0], setError = _f[1];
    var textRef = react_1.useRef(null);
    var router = navigation_1.useRouter();
    var handleChange = function (e) {
        var _a;
        e.preventDefault();
        var files = (_a = e.target) === null || _a === void 0 ? void 0 : _a.files;
        if (files && files[0]) {
            setFile(files[0]);
        }
    };
    var handleDrag = function (e) {
        if (e.type === "dragenter") {
            setDragging(true);
        }
        else if (e.type === "dragleave") {
            setDragging(false);
        }
    };
    var handleDragOver = function (e) {
        e.preventDefault();
    };
    var handleDrop = function (e) {
        var _a;
        e.preventDefault();
        setDragging(false);
        var files = (_a = e.dataTransfer) === null || _a === void 0 ? void 0 : _a.files;
        if (files && files[0]) {
            setFile(files[0]);
        }
    };
    var handleSubmit = function (e) {
        var _a, _b;
        e.preventDefault();
        if (!file)
            return;
        setLoading(true);
        var formData = new FormData();
        formData.append("file", file);
        formData.append("text", (_b = (_a = textRef.current) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "");
        fetch("/api/post/", { method: "POST", body: formData }) //
            .then(function (res) {
            if (!res.ok) {
                setError(res.status + " " + res.statusText);
                return;
            }
            router.push("/");
        })["catch"](function (err) { return setError(err.toString()); })["finally"](function () { return setLoading(false); });
    };
    return (React.createElement("section", { className: 'm-auto w-full max-w-xl flex flex-col items-center mt-6' },
        loading && (React.createElement("div", { className: 'absolute inset-0 z-20 flex justify-center text-center pt-[30%] bg-gray-500/20' },
            React.createElement(cg_1.CgSpinner, null))),
        error && (React.createElement("p", { className: 'w-full bg-red-100 text-red-600 text-center p-4 mb-4' }, error)),
        React.createElement(PostUserProfile_1["default"], { username: username, image: image !== null && image !== void 0 ? image : "" }),
        React.createElement("form", { className: 'w-full flex flex-col mt-2', onSubmit: handleSubmit },
            React.createElement("input", { className: 'hidden', name: 'input', id: 'input-upload', type: 'file', accept: 'image/*', onChange: handleChange }),
            React.createElement("label", { className: "w-full h-96 flex flex-col items-center justify-center rounded-3xl " + (!file && "border border-gray-300"), htmlFor: 'input-upload', onDragEnter: handleDrag, onDragLeave: handleDrag, onDragOver: handleDragOver, onDrop: handleDrop },
                dragging && (React.createElement("div", { className: 'absolute inset-0 z-10 bg-gray-500/20 pointer-events-none' })),
                !file && (React.createElement("div", { className: 'flex flex-col items-center pointer-events-none' },
                    React.createElement("p", { className: 'text-sm text-gray-400' }, "Drag and Drop your image here or click"))),
                file && (React.createElement("div", { className: 'relative w-full aspect-square' },
                    React.createElement(image_1["default"], { className: 'object-cover rounded-3xl', src: URL.createObjectURL(file), alt: 'local file', fill: true, sizes: '650px' })))),
            React.createElement("textarea", { className: 'outline-none mt-2 text-sm p-6 border border-gray-300 resize-none rounded-3xl', name: 'text', id: 'input-text', required: true, rows: 8, placeholder: "What's on your mind?", ref: textRef }),
            React.createElement("div", { className: 'flex justify-end p-2' },
                React.createElement(Button_1["default"], { text: 'Publish', onClick: function () { }, size: "big" })))));
}
exports["default"] = NewPost;
