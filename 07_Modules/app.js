"use strict";
// Modules
// Exporting and importing modules
// Default exports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const payment_1 = require("./payment");
(0, payment_1.addPayment)(12);
// default export
const payment_2 = __importDefault(require("./payment"));
const payment = new payment_2.default(12, 1234567890);
console.log(payment);
