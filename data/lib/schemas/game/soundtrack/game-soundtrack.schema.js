"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameSoundtrackSchemaDefinition = void 0;
const validators_1 = require("../../../validators");
const game_item_quantity_schema_1 = require("../item/game-item-quantity.schema");
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
    priority: {
        type: Number,
        min: 0,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    name: {
        type: String
    },
    material: {
        type: game_item_quantity_schema_1.GameItemQuantitySchema
    },
    audioUrl: {
        type: String
        // TODO Add URL validation
    },
    thumbnailUrl: {
        type: String
        // TODO Add URL validation
    }
};
