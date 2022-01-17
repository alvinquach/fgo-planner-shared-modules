import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { MasterAccountValidators, ValidationStrings } from '../../validators';
import { GameItemQuantitySchema } from '../game/item/game-item-quantity.schema';
import { PlanServantSchema } from './plan-servant.schema';

/**
 * Mongoose schema for the `PlanServant.enabled` property.
 */
export const PlanEnabledSchema = new Schema({
    ascensions: {
        type: Boolean,
        required: true,
        default: true
    },
    skills: {
        type: Boolean,
        required: true,
        default: true
    },
    appendSkills: {
        type: Boolean,
        required: true,
        default: true
    },
    costumes: {
        type: Boolean,
        required: true,
        default: true
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `Plan.inventory` property.
 */
const PlanInventorySchema = new Schema({
    items: {
        type: [GameItemQuantitySchema],
        required: true,
        default: []
    },
    qp: {
        type: Number,
        required: true,
        default: 0
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema definition for the `Plan` type.
 */
export const PlanSchemaDefinition: SchemaDefinition = {
    accountId: {
        type: ObjectId,
        required: true,
        index: true
    },
    groupId: {
        type: ObjectId,
        sparse: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 63
    },
    description: {
        type: String
        // TODO Add length limit
    },
    targetDate: {
        type: Date,
        // TODO Add limits/validators
    },
    enabled: {
        type: PlanEnabledSchema,
        required: true,
        default: {}
    },
    autoUpdate: {
        type: Boolean,
        required: true,
        default: false
    },
    shared: {
        type: Boolean,
        required: true,
        default: false
    },
    servants: {
        type: [PlanServantSchema],
        required: true,
        validate: {
            // TODO Validate that there are no duplicate gameId for unowned servants
            validator: MasterAccountValidators.servantInstanceIdsNullOrUnique,
            message: ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    inventory: {
        type: PlanInventorySchema,
        required: true,
        default: {}
    }
};
