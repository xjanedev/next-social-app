"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var swr_1 = require("swr");
var cg_1 = require("react-icons/cg");
var UserCard_1 = require("./UserCard");
function UserSearch() {
    var _a = react_1.useState(""), keyword = _a[0], setKeyword = _a[1];
    var _b = swr_1["default"]("/api/search/" + keyword), users = _b.data, isLoading = _b.isLoading, error = _b.error;
    var onSubmit = function (e) {
        e.preventDefault();
    };
    return (React.createElement("section", { className: 'w-[710px] flex flex-col pt-9 m-auto' },
        React.createElement("form", { className: 'w-full mb-8', onSubmit: onSubmit },
            React.createElement("input", { className: 'w-full rounded-xl text-md p-3 outline-none border border-gray-800', type: 'text', autoFocus: true, placeholder: 'search for a username or name', value: keyword, onChange: function (e) { return setKeyword(e.target.value); } })),
        keyword && (React.createElement(React.Fragment, null,
            error && React.createElement("p", { className: 'm-auto' }, "\uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC600\uC2B5\uB2C8\uB2E4!"),
            isLoading && React.createElement(cg_1.CgSpinner, { className: 'm-auto' }),
            !isLoading && !error && (users === null || users === void 0 ? void 0 : users.length) === 0 && (React.createElement("p", { className: 'm-auto' }, "\uCC3E\uB294 \uC0AC\uC6A9\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4!")),
            React.createElement("ul", { className: 'w-full' }, users &&
                users.map(function (user) { return (React.createElement("li", { key: user.username, className: 'w-[700px] m-auto' },
                    React.createElement(UserCard_1["default"], { user: user }))); }))))));
}
exports["default"] = UserSearch;
