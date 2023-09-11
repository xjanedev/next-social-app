"use strict";
exports.__esModule = true;
exports.parseDate = void 0;
var timeago_js_1 = require("timeago.js");
function parseDate(date) {
    return timeago_js_1.format(date);
}
exports.parseDate = parseDate;
