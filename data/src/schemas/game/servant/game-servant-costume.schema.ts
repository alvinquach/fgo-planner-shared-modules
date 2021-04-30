import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from 'src/validators';
import { GameServantEnhancementSchema } from './game-servant-enhancement.schema';

/**
 * Mongoose schema for the `GameServantCostume` type.
 */
export const GameServantCostumeSchema = new Schema({
    collectionNo: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
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
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
