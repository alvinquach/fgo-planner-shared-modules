"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongooseConnection = (uri) => {
    mongoose_1.default.connection.on('connected', () => {
        console.log(`Mongoose connected to ${uri}`);
    });
    mongoose_1.default.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });
    return mongoose_1.default.connect(uri);
};
exports.mongooseConnection = mongooseConnection;
