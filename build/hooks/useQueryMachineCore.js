'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useQueryMachineCore = void 0
var react_1 = require('@xstate/react')
var services_1 = require('../services')
var states_1 = require('../states')
var useQueryMachineCore = function (axios) {
  var _a = (0, react_1.useMachine)((0, states_1.requestMachine)()),
    state = _a[0],
    send = _a[1]
  var requests = (0, services_1.createRequests)(axios, send)
  var isFailure = state.matches('failure')
  var isIdle = state.matches('idle')
  var isRequest = state.matches('request')
  var isSuccess = state.matches('success')
  return [
    state,
    __assign(__assign({}, requests), {
      isIdle: isIdle,
      isRequest: isRequest,
      isSuccess: isSuccess,
      isFailure: isFailure,
      send: send
    })
  ]
}
exports.useQueryMachineCore = useQueryMachineCore
