import { Schema, SchemaDefinition } from 'mongoose';

/**
 * Mongoose schema for the `ExternalLink` type.
 */
export const ExternalLinkSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        // TODO Add validation
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
