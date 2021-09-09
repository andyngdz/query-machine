'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.useAxiosQueryMachine = void 0
var hooks_1 = require('../hooks')
var axios_1 = __importDefault(require('axios'))
var useAxiosQueryMachine = function (config) {
  var baseAxios = axios_1.default.create(config)
  var queryMachine = (0, hooks_1.useQueryMachine)(baseAxios)
  return [queryMachine, baseAxios]
}
exports.useAxiosQueryMachine = useAxiosQueryMachine
