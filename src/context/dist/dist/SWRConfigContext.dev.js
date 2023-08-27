"use client";
"use strict";

exports.__esModule = true;

var swr_1 = require("swr");

function SWRConfigContext(_a) {
  var children = _a.children;
  return React.createElement(swr_1.SWRConfig, {
    value: {
      fetcher: function fetcher(url) {
        return fetch(url).then(function (res) {
          return res.json();
        });
      }
    }
  }, children);
}

exports["default"] = SWRConfigContext;