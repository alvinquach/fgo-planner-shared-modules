"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbColorSchema = exports.ColorSchemaDefinition = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../validators");
const isValidRgbValue = function (value) {
    return value != null && Number.isInteger(value) && value >= 0 && value <= 255;
};
/**
 * Mongoose schema definition property for a RGB value.
 */
const ColorSchemaDefinitionProperty = {
    type: Number,
    required: true,
    validate: {
        validator: isValidRgbValue,
        message: validators_1.ValidationStrings.RgbColorValue
    },
    default: 0
};
/**
 * Mongoose schema definition for the `RgbColor` type.
 */
exports.ColorSchemaDefinition = {
    r: ColorSchemaDefinitionProperty,
    g: ColorSchemaDefinitionProperty,
    b: ColorSchemaDefinitionProperty
};
/**
 * Mongoose schema for the `RgbColor` type.
 */
exports.RgbColorSchema = new mongoose_1.Schema(exports.ColorSchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
