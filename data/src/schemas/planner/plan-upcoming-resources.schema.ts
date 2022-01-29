import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../validators';
import { GameEmberQuantitiesSchema } from '../game/ember/game-ember-quantities.schema';
import { GameItemQuantitySchema } from '../game/item/game-item-quantity.schema';

/**
 * Mongoose schema for the `PlanUpcomingResources` type.
 */
export const PlanUpcomingResourcesSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: ''
    },
    items: {
        type: [GameItemQuantitySchema],
        required: true,
        default: []
    },
    embers: {
        type: GameEmberQuantitiesSchema,
        required: true,
        default: {}
    },
    qp: {
        type: Number,
        required: true,
        min: 0,
        max: 2000000000, // TODO Define this as a constant
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
