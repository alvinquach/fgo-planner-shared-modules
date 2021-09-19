import { PlanServantType } from '@fgo-planner/types';
import { Schema, SchemaDefinition } from 'mongoose';
import { CommonValidators, ValidationStrings } from '../../validators';
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
    type: {
        type: String,
        enum: Object.keys(PlanServantType),
        required: true
    },
    instanceId: {
        type: Number,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    collectionNo: {
        type: Number,
        validate: {
            validator: CommonValidators.isNullOrInteger,
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
