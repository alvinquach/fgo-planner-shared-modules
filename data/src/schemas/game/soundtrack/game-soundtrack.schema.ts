import { SchemaDefinition } from 'mongoose';
import { CommonValidators, ValidationStrings } from '../../../validators';
import { GameItemQuantitySchema } from '../item/game-item-quantity.schema';

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
    priority: {
        type: Number,
        min: 0,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    name: {
        type: String
    },
    material: {
        type: GameItemQuantitySchema
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
