"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateQueryMachine = void 0;
var useQueryMachineCore_1 = require("./useQueryMachineCore");
var useCreateQueryMachine = function (axios) {
    var useQueryMachine = function () { return (0, useQueryMachineCore_1.useQueryMachineCore)(axios); };
    return useQueryMachine;
};
exports.useCreateQueryMachine = useCreateQueryMachine;
