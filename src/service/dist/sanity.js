"use strict";
exports.__esModule = true;
exports.assetsURL = exports.urlFor = exports.client = void 0;
var client_1 = require("@sanity/client");
var image_url_1 = require("@sanity/image-url");
exports.client = client_1.createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    useCdn: false,
    apiVersion: "2023-08-01",
    token: process.env.SANITY_SECRET_TOKEN
});
var builder = image_url_1["default"](exports.client);
function urlFor(source) {
    return builder.image(source).width(800).url();
}
exports.urlFor = urlFor;
exports.assetsURL = "https://" + process.env.SANITY_PROJECT_ID + ".api.sanity.io/v2021-10-21/assets/images/" + process.env.SANITY_DATASET;
