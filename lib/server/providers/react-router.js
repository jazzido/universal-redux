'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.match = match;

var _reactRouter = require('react-router');

function match(routes, location, store, history, cb) {
  (0, _reactRouter.match)({ history: history, routes: routes, location: location }, cb);
}