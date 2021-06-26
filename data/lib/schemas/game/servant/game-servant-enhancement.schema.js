"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServantEnhancementSchema = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../../../validators");
const game_item_quantity_schema_1 = require("../item/game-item-quantity.schema");
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
        type: [game_item_quantity_schema_1.GameItemQuantitySchema],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
