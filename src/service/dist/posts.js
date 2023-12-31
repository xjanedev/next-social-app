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
exports.createPost = exports.addComment = exports.dislikePost = exports.likePost = exports.getSavedPostsOf = exports.getLikedPostsOf = exports.getPostsOf = exports.getPost = exports.getFollowingPostsOf = void 0;
var sanity_1 = require("./sanity");
var simplePostProjection = "\n    ...,\n    \"username\": author->username,\n    \"userImage\": author->image,\n    \"image\": photo,\n    \"likes\": likes[]->username,\n    \"text\": comments[0].comment,\n    \"comments\": count(comments),\n    \"id\":_id,\n    \"createdAt\":_createdAt\n";
function getFollowingPostsOf(username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type ==\"post\" && author->username == \"" + username + "\"\n          || author._ref in *[_type == \"user\" && username == \"" + username + "\"].following[]._ref]\n          | order(_createdAt desc){\n          " + simplePostProjection + "\n        }")
                    .then(mapPosts)];
        });
    });
}
exports.getFollowingPostsOf = getFollowingPostsOf;
function getPost(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type == \"post\" && _id == \"" + id + "\"][0]{\n      ...,\n      \"username\": author->username,\n      \"userImage\": author->image,\n      \"image\": photo,\n      \"likes\": likes[]->username,\n      comments[]{comment, \"username\": author->username, \"image\": author->image},\n      \"id\":_id,\n      \"createdAt\":_creatdAt\n    }", undefined, {
                    cache: "no-store"
                })
                    .then(function (post) { return (__assign(__assign({}, post), { image: sanity_1.urlFor(post.image) })); })];
        });
    });
}
exports.getPost = getPost;
function getPostsOf(username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type == \"post\" && author->username == \"" + username + "\"]\n      | order(_createdAt desc){\n        " + simplePostProjection + "\n      }", undefined, {
                    cache: "no-store"
                })
                    .then(mapPosts)];
        });
    });
}
exports.getPostsOf = getPostsOf;
function getLikedPostsOf(username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type == \"post\" && \"" + username + "\" in likes[]->username]\n      | order(_createdAt desc){\n        " + simplePostProjection + "\n      }", undefined, {
                    cache: "no-store"
                })
                    .then(mapPosts)];
        });
    });
}
exports.getLikedPostsOf = getLikedPostsOf;
function getSavedPostsOf(username) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .fetch("*[_type == \"post\" && _id in *[_type==\"user\" && username==\"" + username + "\"].bookmarks[]._ref]\n      | order(_createdAt desc){\n        " + simplePostProjection + "\n      }", undefined, {
                    cache: "no-store"
                })
                    .then(mapPosts)];
        });
    });
}
exports.getSavedPostsOf = getSavedPostsOf;
function mapPosts(posts) {
    return posts.map(function (post) {
        var _a;
        return (__assign(__assign({}, post), { likes: (_a = post.likes) !== null && _a !== void 0 ? _a : [], image: sanity_1.urlFor(post.image) }));
    });
}
function likePost(postId, userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .patch(postId)
                    .setIfMissing({ likes: [] })
                    .append("likes", [
                    {
                        _ref: userId,
                        _type: "reference"
                    },
                ])
                    .commit({ autoGenerateArrayKeys: true })];
        });
    });
}
exports.likePost = likePost;
function dislikePost(postId, userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .patch(postId)
                    .unset(["likes[_ref==\"" + userId + "\"]"])
                    .commit()];
        });
    });
}
exports.dislikePost = dislikePost;
function addComment(postId, userId, comment) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, sanity_1.client
                    .patch(postId) //
                    .setIfMissing({ comments: [] })
                    .append("comments", [
                    {
                        comment: comment,
                        author: { _ref: userId, _type: "reference" }
                    },
                ])
                    .commit({ autoGenerateArrayKeys: true })];
        });
    });
}
exports.addComment = addComment;
function createPost(userId, text, file) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fetch(sanity_1.assetsURL, {
                    method: "POST",
                    headers: {
                        "content-type": file.type,
                        authorization: "Bearer " + process.env.SANITY_SECRET_TOKEN
                    },
                    body: file
                })
                    .then(function (res) { return res.json(); })
                    .then(function (result) {
                    return sanity_1.client.create({
                        _type: "post",
                        author: { _ref: userId },
                        photo: { asset: { _ref: result.document._id } },
                        comments: [
                            {
                                comment: text,
                                author: { _ref: userId, _type: "reference" }
                            },
                        ],
                        likes: []
                    }, { autoGenerateArrayKeys: true });
                })];
        });
    });
}
exports.createPost = createPost;
