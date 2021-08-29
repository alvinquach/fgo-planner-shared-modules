"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbaColorSchema = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("src/validators");
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
 * Mongoose schema for the `RgbaColor` type.
 */
exports.RgbaColorSchema = new mongoose_1.Schema({
    r: ColorSchemaDefinitionProperty,
    g: ColorSchemaDefinitionProperty,
    b: ColorSchemaDefinitionProperty,
    a: {
        type: Number,
        required: true,
        min: 0,
        max: 1,
        default: 1.0
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
