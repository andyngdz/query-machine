"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineLoader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MachineLoader = function (_a) {
    var _b;
    var state = _a.state, onBuilder = _a.onBuilder, onLoading = _a.onLoading, restProps = __rest(_a, ["state", "onBuilder", "onLoading"]);
    var matches = state.matches, context = state.context;
    var data = (_b = context.data) === null || _b === void 0 ? void 0 : _b.data;
    var loading = matches('request');
    if (data) {
        return onBuilder(data);
    }
    if (loading && onLoading) {
        return onLoading();
    }
    return (0, jsx_runtime_1.jsx)("span", { children: "Loading" }, void 0);
};
exports.MachineLoader = MachineLoader;
