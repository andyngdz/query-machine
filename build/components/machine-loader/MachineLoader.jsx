'use strict'
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.MachineLoader = void 0
require('react-loader-spinner/dist/loader/css/react-spinner-loader.css')
var react_loader_spinner_1 = __importDefault(require('react-loader-spinner'))
var MachineLoader = function (_a) {
  var _b
  var state = _a.state,
    _c = _a.type,
    type = _c === void 0 ? 'Audio' : _c,
    onBuilder = _a.onBuilder,
    onLoading = _a.onLoading,
    restProps = __rest(_a, ['state', 'type', 'onBuilder', 'onLoading'])
  var matches = state.matches,
    context = state.context
  var data = (_b = context.data) === null || _b === void 0 ? void 0 : _b.data
  var loading = matches('request')
  if (data) {
    return onBuilder(data)
  }
  if (loading && onLoading) {
    return onLoading()
  }
  return <react_loader_spinner_1.default type={type} {...restProps} />
}
exports.MachineLoader = MachineLoader
