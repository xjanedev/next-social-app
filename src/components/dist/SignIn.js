"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("next-auth/react");
var Button_1 = require("./ui/Button");
function SignIn(_a) {
    var providers = _a.providers, callbackUrl = _a.callbackUrl;
    return (React.createElement("div", { className: 'fixed inset-0 flex justify-center items-center' },
        React.createElement("div", { className: 'text-center' },
            React.createElement("div", { className: 'mb-4' }, "\uD83D\uDCD3 share your photo diary"),
            Object.values(providers).map(function (_a) {
                var name = _a.name, id = _a.id;
                return (React.createElement("div", { key: id },
                    React.createElement(Button_1["default"], { text: "Sign In with " + name, onClick: function () { return react_1.signIn(id, { callbackUrl: callbackUrl }); }, size: 'big' })));
            }))));
}
exports["default"] = SignIn;
