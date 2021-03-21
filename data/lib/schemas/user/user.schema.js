"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaDefinition = void 0;
/**
 * Mongoose schema definition for the `User` type.
 */
exports.UserSchemaDefinition = {
    username: {
        type: String,
        // TODO Add validation
        required: true,
        unique: true,
        index: true
    },
    hash: {
        type: String
    },
    email: {
        type: String,
        // TODO Add validation
        required: false,
        unique: true,
        sparse: true
    },
    admin: {
        type: Boolean,
        index: true
    },
    enabled: {
        type: Boolean,
        required: true,
        default: true,
        index: true
    }
};
