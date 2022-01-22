import { Schema, SchemaDefinition } from 'mongoose';
import { ValidationStrings } from '../../validators';
import { PlanServantEnhancementsSchema } from './plan-servant-enhancements.schema';

/**
 * Mongoose schema for the `PlanServant.enabled` property.
 */
export const PlanServantEnabledSchema = new Schema({
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
 * Mongoose schema for the `PlanServant` type.
 */
export const PlanServantSchema = new Schema({
    instanceId: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    enabled: {
        type: PlanServantEnabledSchema,
        required: true,
        default: {}
    },
    current: {
        type: PlanServantEnhancementsSchema,
        required: true,
        default: {}
    },
    target: {
        type: PlanServantEnhancementsSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
