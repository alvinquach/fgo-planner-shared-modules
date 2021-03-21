import { Schema } from 'mongoose';
import { ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `MasterItem` type.
 */
export const MasterItemSchema = new Schema({
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
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    }
}, { _id: false, storeSubdocValidationError: false });
