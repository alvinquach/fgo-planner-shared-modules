"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaDefinition = void 0;
const user_preferences_schema_1 = require("./user-preferences.schema");
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
    },
    userPrefs: {
        type: user_preferences_schema_1.UserPreferencesSchema,
        required: true,
        default: {}
    }
};
