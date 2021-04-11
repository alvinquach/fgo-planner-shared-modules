"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServantEnhancementSchema = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../../../validators");
/**
 * Mongoose schema for the `GameServantEnhancement.materials` property.
 */
const GameServantEnhancementMaterialsSchema = new mongoose_1.Schema({
    itemId: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 1
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `GameServantEnhancement` type.
 */
exports.GameServantEnhancementSchema = new mongoose_1.Schema({
    qp: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 0
    },
    materials: {
        type: [GameServantEnhancementMaterialsSchema],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
