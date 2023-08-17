"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("next-auth/react");
var Button_1 = require("./ui/Button");
function SignIn(_a) {
    var providers = _a.providers, callbackUrl = _a.callbackUrl;
    return (React.createElement(React.Fragment, null, Object.values(providers).map(function (_a) {
        var name = _a.name, id = _a.id;
        return (
        // eslint-disable-next-line react/jsx-key
        React.createElement("div", { className: 'display flex justify-center' },
            React.createElement(Button_1["default"], { key: id, text: "Sign In with " + name, onClick: function () { return react_1.signIn(id, { callbackUrl: callbackUrl }); }, size: "big" })));
    })));
}
exports["default"] = SignIn;
