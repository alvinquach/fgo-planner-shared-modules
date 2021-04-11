import { Schema, SchemaDefinition } from 'mongoose';
import { MasterPlanServantEnhancementsSchema } from './master-plan-servant-enhancements.schema';

/**
 * Mongoose schema for the `MasterPlanServant` type.
 */
export const MasterPlanServantSchema = new Schema({
    instanceId: {
        type: Number,
        required: true
    },
    current: {
        type: MasterPlanServantEnhancementsSchema,
        required: true,
        default: {}
    },
    target: {
        type: MasterPlanServantEnhancementsSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
