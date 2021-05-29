"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RgbaColorSchema = void 0;
const mongoose_1 = require("mongoose");
const rgb_color_schema_1 = require("./rgb-color.schema");
/**
 * Mongoose schema for the `RgbaColor` type.
 */
exports.RgbaColorSchema = new mongoose_1.Schema(Object.assign(Object.assign({}, rgb_color_schema_1.ColorSchemaDefinition), { a: {
        type: Number,
        required: true,
        min: 0,
        max: 1,
        default: 1.0
    } }), {
    _id: false,
    storeSubdocValidationError: false
});
