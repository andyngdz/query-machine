'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.requestMachine = void 0
var xstate_1 = require('xstate')
var REQUEST_MACHINE_ACTIONS = {
  REQUEST: 'request'
}
var requestMachine = function () {
  return (0, xstate_1.createMachine)({
    initial: 'idle',
    states: {
      idle: {
        on: REQUEST_MACHINE_ACTIONS
      },
      request: {
        invoke: {
          src: function (_, event) {
            var request = event.request
            return request()
          },
          onDone: {
            actions: (0, xstate_1.assign)(function (_, event) {
              var data = event.data
              return { data: data }
            }),
            target: 'success'
          },
          onError: {
            actions: (0, xstate_1.assign)(function (_, event) {
              var error = event.data
              return { error: error }
            }),
            target: 'failure'
          }
        }
      },
      success: {
        on: REQUEST_MACHINE_ACTIONS
      },
      failure: {
        on: REQUEST_MACHINE_ACTIONS
      }
    }
  })
}
exports.requestMachine = requestMachine
