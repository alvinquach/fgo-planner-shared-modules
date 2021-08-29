"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPreferencesSchema = void 0;
const mongoose_1 = require("mongoose");
const rgba_color_schema_1 = require("../rgba-color.schema");
/**
 * Mongoose schema for the `UserWebClientTheme` type.
 */
const UserWebClientThemeSchema = new mongoose_1.Schema({
    backgroundImageUrl: {
        type: String,
        // TODO Add URL validation
    },
    backgroundColor: {
        type: rgba_color_schema_1.RgbaColorSchema,
        required: true
    },
    foregroundColor: {
        type: rgba_color_schema_1.RgbaColorSchema,
        required: true
    },
    primaryColor: {
        type: rgba_color_schema_1.RgbaColorSchema,
        required: true
    },
    secondaryColor: {
        type: rgba_color_schema_1.RgbaColorSchema,
        required: true
    },
    dividerColor: {
        type: rgba_color_schema_1.RgbaColorSchema,
        required: true
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `UserWebClientPreferences.themes` property.
 */
const UserWebClientPreferencesThemesSchema = new mongoose_1.Schema({
    light: {
        type: UserWebClientThemeSchema
    },
    dark: {
        type: UserWebClientThemeSchema
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `UserWebClientPreferences` type.
 */
const UserWebClientPreferencesSchema = new mongoose_1.Schema({
    themes: {
        type: UserWebClientPreferencesThemesSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `UserPreferences` type.
 */
exports.UserPreferencesSchema = new mongoose_1.Schema({
    // TODO Add global preferences
    webClient: {
        type: UserWebClientPreferencesSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
