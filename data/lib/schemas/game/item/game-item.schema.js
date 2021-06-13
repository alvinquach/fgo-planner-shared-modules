"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameItemSchemaDefinition = void 0;
const types_1 = require("../../../types");
const validators_1 = require("../../../validators");
/**
 * Mongoose schema definition for the `GameItem` type.
 */
exports.GameItemSchemaDefinition = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    background: {
        type: String,
        enum: Object.keys(types_1.GameItemBackground),
        required: true,
        default: types_1.GameItemBackground.Bronze
    },
    uses: {
        type: [String],
        enum: Object.keys(types_1.GameItemUsage),
        required: true,
        index: true,
        default: []
    }
};
