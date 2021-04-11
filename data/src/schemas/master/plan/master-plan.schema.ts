import { ObjectId } from 'bson';
import { Schema, SchemaDefinition } from 'mongoose';
import { MasterAccountValidators, ValidationStrings } from 'src/validators';
import { MasterItemSchema } from '../item/master-item.schema';
import { MasterPlanServantSchema } from './master-plan-servant.schema';

/**
 * Mongoose schema for the `MasterPlan.inventory` property.
 */
const MasterPlanInventorySchema = new Schema({
    items: {
        type: [MasterItemSchema],
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
 * Mongoose schema definition for the `MasterPlan` type.
 */
export const MasterPlanSchemaDefinition: SchemaDefinition = {
    accountId: {
        type: ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 31
    },
    description: {
        type: String
        // TODO Add length limit
    },
    targetDate: {
        type: Date,
        // TODO Add limits/validators
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
        type: [MasterPlanServantSchema],
        required: true,
        validate: {
            validator: MasterAccountValidators.servantInstanceIdsUnique,
            message: ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    inventory: {
        type: MasterPlanInventorySchema,
        required: true,
        default: {}
    }
};
