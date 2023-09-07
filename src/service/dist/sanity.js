"use strict";
exports.__esModule = true;
exports.urlFor = exports.client = void 0;
var client_1 = require("@sanity/client");
var image_url_1 = require("@sanity/image-url");
exports.client = client_1.createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: false,
    apiVersion: "2023-09-05",
    token: process.env.SANITY_SECRET_TOKEN
});
var builder = image_url_1["default"](exports.client);
function urlFor(source) {
    return builder.image(source).width(800).url();
}
exports.urlFor = urlFor;
