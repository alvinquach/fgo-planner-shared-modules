import { Schema, SchemaDefinition } from 'mongoose';
import { ExternalLinkSchema } from '../../external-link.schema';

/**
 * Mongoose schema for the `GameServantMetadata` type.
 */
export const GameServantMetadataSchema = new Schema({
    displayName: {
        type: String
    },
    fgoManagerName: {
        type: String
    },
    links: {
        type: [ExternalLinkSchema],
        required: true,
        default: []
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
