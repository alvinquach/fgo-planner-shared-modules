import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `GameServantEnhancement.materials` property.
 */
const GameServantEnhancementMaterialsSchema = new Schema({
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
 * Mongoose schema for the `GameServantEnhancement` type.
 */
export const GameServantEnhancementSchema = new Schema({
    qp: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    materials: {
        type: [GameServantEnhancementMaterialsSchema],
        required: true,
        default: []
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
