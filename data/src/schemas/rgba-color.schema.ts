import { Schema, SchemaDefinition } from 'mongoose';
import { ColorSchemaDefinition } from './rgb-color.schema';

/**
 * Mongoose schema for the `RgbaColor` type.
 */
export const RgbaColorSchema = new Schema({
    ...ColorSchemaDefinition,
    a: {
        type: Number,
        required: true,
        min: 0,
        max: 1,
        default: 1.0
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
