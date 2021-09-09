"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequests = void 0;
var createRequests = function (axios, send) {
    var onGet = function (url, config) {
        var request = function () { return axios.get(url, config); };
        send('REQUEST', { request: request });
    };
    var onDelete = function (url, config) {
        var request = function () { return axios.delete(url, config); };
        send('REQUEST', { request: request });
    };
    var onOptions = function (url, config) {
        var request = function () { return axios.options(url, config); };
        send('REQUEST', { request: request });
    };
    var onHead = function (url, config) {
        var request = function () { return axios.head(url, config); };
        send('REQUEST', { request: request });
    };
    var onPatch = function (url, data, config) {
        var request = function () { return axios.patch(url, data, config); };
        send('REQUEST', { request: request });
    };
    var onPost = function (url, data, config) {
        var request = function () { return axios.post(url, data, config); };
        send('REQUEST', { request: request });
    };
    var onPut = function (url, data, config) {
        var request = function () { return axios.put(url, data, config); };
        send('REQUEST', { request: request });
    };
    return { onGet: onGet, onDelete: onDelete, onOptions: onOptions, onHead: onHead, onPatch: onPatch, onPost: onPost, onPut: onPut };
};
exports.createRequests = createRequests;
