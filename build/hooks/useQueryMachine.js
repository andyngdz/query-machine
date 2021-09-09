'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.useQueryMachine = void 0
var react_1 = require('@xstate/react')
var states_1 = require('../states')
var useQueryMachine = function (axiosBase) {
  var _a = (0, react_1.useMachine)((0, states_1.requestMachine)()),
    state = _a[0],
    send = _a[1]
  var onGet = function (url, config) {
    var request = function () {
      return axiosBase.get(url, config)
    }
    send('REQUEST', { request: request })
  }
  return { state: state, onGet: onGet }
}
exports.useQueryMachine = useQueryMachine
