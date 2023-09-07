"use strict";
exports.__esModule = true;
exports.useCaheKeys = exports.CacheKeysContext = void 0;
var react_1 = require("react");
exports.CacheKeysContext = react_1.createContext({
    postsKey: "/api/post"
});
exports.useCaheKeys = function () { return react_1.useContext(exports.CacheKeysContext); };
