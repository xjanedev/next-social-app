"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.unfollow = exports.follow = exports.removeBookmark = exports.addBookmark = exports.getUserForProfile = exports.searchUsers = exports.getUserByUsername = exports.addUser = void 0;
var sanity_1 = require("./sanity");
function addUser(_a) {
    var id = _a.id, username = _a.username, email = _a.email, name = _a.name, image = _a.image;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            return [2 /*return*/, sanity_1.client.createIfNotExists({
                    _id: id,
                    _type: "user",
                    username: username,
                    email: email,
                    name: name,
                    image: image,
                    following: [],
                    followers: [],
                    bookmarks: []
                })];
        });
    });
}
exports.addUser = addUser;
function getUserByUsername(username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client.fetch("*[_type == \"user\" && username == \"" + username + "\"][0]{\n      ...,\n      \"id\":_id,\n      following[]->{username,image},\n      followers[]->{username,image},\n      \"bookmarks\":bookmarks[]->_id\n    }")];
        });
    });
}
exports.getUserByUsername = getUserByUsername;
function searchUsers(keyword) {
    return __awaiter(this, void 0, void 0, function () {
        var query;
        return __generator(this, function (_a) {
            query = keyword
                ? "&& (name match \"" + keyword + "\") || (username match \"" + keyword + "\")"
                : "";
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type ==\"user\" " + query + "]{\n      ...,\n      \"following\": count(following),\n      \"followers\": count(followers),\n    }\n    ")
                    .then(function (users) {
                    return users.map(function (user) {
                        var _a, _b;
                        return (__assign(__assign({}, user), { following: (_a = user.following) !== null && _a !== void 0 ? _a : 0, followers: (_b = user.followers) !== null && _b !== void 0 ? _b : 0 }));
                    });
                })];
        });
    });
}
exports.searchUsers = searchUsers;
function getUserForProfile(username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type == \"user\" && username == \"" + username + "\"][0]{\n      ...,\n      \"id\":_id,\n      \"following\": count(following),\n      \"followers\": count(followers),\n      \"posts\": count(*[_type==\"post\" && author->username == \"" + username + "\"])\n    }\n    ")
                    .then(function (user) {
                    var _a, _b, _c;
                    return (__assign(__assign({}, user), { following: (_a = user.following) !== null && _a !== void 0 ? _a : 0, followers: (_b = user.followers) !== null && _b !== void 0 ? _b : 0, posts: (_c = user.posts) !== null && _c !== void 0 ? _c : 0 }));
                })];
        });
    });
}
exports.getUserForProfile = getUserForProfile;
function addBookmark(userId, postId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .patch(userId)
                    .setIfMissing({ bookmarks: [] })
                    .append("bookmarks", [
                    {
                        _ref: postId,
                        _type: "reference"
                    },
                ])
                    .commit({ autoGenerateArrayKeys: true })];
        });
    });
}
exports.addBookmark = addBookmark;
function removeBookmark(userId, postId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .patch(userId)
                    .unset(["bookmarks[_ref==\"" + postId + "\"]"])
                    .commit()];
        });
    });
}
exports.removeBookmark = removeBookmark;
function follow(myId, targetId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .transaction()
                    .patch(myId, function (user) {
                    return user
                        .setIfMissing({ following: [] })
                        .append("following", [{ _ref: targetId, _type: "reference" }]);
                })
                    .patch(targetId, function (user) {
                    return user
                        .setIfMissing({ followers: [] })
                        .append("followers", [{ _ref: myId, _type: "reference" }]);
                })
                    .commit({ autoGenerateArrayKeys: true })];
        });
    });
}
exports.follow = follow;
function unfollow(myId, targetId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .transaction()
                    .patch(myId, function (user) { return user.unset(["following[_ref==\"" + targetId + "\"]"]); })
                    .patch(targetId, function (user) { return user.unset(["followers[_ref==\"" + myId + "\"]"]); })
                    .commit({ autoGenerateArrayKeys: true })];
        });
    });
}
exports.unfollow = unfollow;
