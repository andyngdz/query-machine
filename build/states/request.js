'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.requestMachine = void 0
var xstate_1 = require('xstate')
var requestMachine = function () {
  return (0, xstate_1.createMachine)({
    initial: 'idle',
    states: {
      idle: {
        on: {
          REQUEST: 'request'
        }
      },
      request: {
        invoke: {
          src: function (_, event) {
            var request = event.request
            return request()
          },
          onDone: {
            actions: (0, xstate_1.assign)(function (_, event) {
              var data = event.data.data
              return { data: data }
            })
          },
          onError: {
            actions: function (context, event) {
              console.info(event)
            }
          }
        }
      }
    }
  })
}
exports.requestMachine = requestMachine
