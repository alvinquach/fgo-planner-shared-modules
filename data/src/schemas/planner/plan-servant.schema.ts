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
    type: {
        type: String,
        enum: Object.keys(PlanServantType),
        required: true
    },
    instanceId: {
        type: Number,
        validate: {
            // TODO Validate that instanceId is present if type is Owned.
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    gameId: {
        type: Number,
        required: true,
        min: 0,
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
