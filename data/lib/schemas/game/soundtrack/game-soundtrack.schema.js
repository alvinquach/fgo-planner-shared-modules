"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSoundtrackSchemaDefinition = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../../../validators");
/**
 * Mongoose schema for the `GameSoundtrack.material` property.
 */
const GameSoundtrackMaterialSchema = new mongoose_1.Schema({
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
 * Mongoose schema definition for the `GameSoundtrack` type.
 */
exports.GameSoundtrackSchemaDefinition = {
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
        type: String
    },
    nameJp: {
        type: String
    },
    unlocked: {
        type: Boolean,
        required: true,
        default: false
    },
    material: {
        type: GameSoundtrackMaterialSchema
    }
};
