'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useCreateAxiosQueryMachine = void 0
var axios_1 = __importDefault(require('axios'))
var useQueryMachineCore_1 = require('./useQueryMachineCore')
var useCreateAxiosQueryMachine = function (config) {
  var baseAxios = axios_1.default.create(config)
  var useQueryMachine = function () {
    return (0, useQueryMachineCore_1.useQueryMachineCore)(baseAxios)
  }
  return [useQueryMachine, baseAxios]
}
exports.useCreateAxiosQueryMachine = useCreateAxiosQueryMachine
