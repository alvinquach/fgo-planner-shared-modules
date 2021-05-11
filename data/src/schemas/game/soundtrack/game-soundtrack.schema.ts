import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `GameSoundtrack.material` property.
 */
const GameSoundtrackMaterialSchema = new Schema({
    itemId: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema definition for the `GameSoundtrack` type.
 */
export const GameSoundtrackSchemaDefinition: SchemaDefinition = {
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
