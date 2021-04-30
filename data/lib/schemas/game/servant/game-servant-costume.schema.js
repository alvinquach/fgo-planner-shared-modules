"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServantCostumeSchema = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("src/validators");
const game_servant_enhancement_schema_1 = require("./game-servant-enhancement.schema");
/**
 * Mongoose schema for the `GameServantCostume` type.
 */
exports.GameServantCostumeSchema = new mongoose_1.Schema({
    collectionNo: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        unique: true
    },
    name: {
        type: String,
        index: true
    },
    nameJp: {
        type: String
    },
    materials: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
