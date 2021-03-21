import { SchemaDefinition } from 'mongoose';
import { GameItemBackground, GameItemUsage } from '../../../types';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema definition for the `GameItem` type.
 */
export const GameItemSchemaDefinition: SchemaDefinition = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    name: {
        type: String,
        required: true
    },
    nameJp: {
        type: String
    },
    description: {
        type: String
    },
    background: {
        type: String,
        enum: Object.keys(GameItemBackground),
        required: true,
        default: GameItemBackground.Bronze
    },
    uses: {
        type: [String],
        enum: Object.keys(GameItemUsage),
        required: true,
        index: true,
        default: []
    }
};
