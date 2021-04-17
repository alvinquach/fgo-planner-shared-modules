import { Schema, SchemaDefinition } from 'mongoose';
import { MasterPlanServantEnhancementsSchema } from './master-plan-servant-enhancements.schema';

/**
 * Mongoose schema for the `MasterPlanServant.enabled` property.
 */
export const MasterPlanServantEnabledSchema = new Schema({
    servant: {
        type: Boolean,
        required: true,
        default: true
    },
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
 * Mongoose schema for the `MasterPlanServant` type.
 */
export const MasterPlanServantSchema = new Schema({
    instanceId: {
        type: Number,
        required: true
    },
    enabled: {
        type: MasterPlanServantEnabledSchema,
        required: true,
        default: {}
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
