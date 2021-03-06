import { Schema, SchemaDefinition } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../validators';

/**
 * Mongoose schema for the `PlanServantEnhancements.skills` property.
 */
const PlanServantEnhancementsSkillsSchema = new Schema({
    1: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    2: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `PlanServantEnhancements` type.
 */
export const PlanServantEnhancementsSchema = new Schema({
    level: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    ascension: {
        type: Number,
        min: 0,
        max: 4,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    fouAtk: {
        type: Number,
        min: 0,
        max: 2000,
        validate: {
            validator: MasterAccountValidators.isFouValueValid,
            message: ValidationStrings.GenericInvalidValue
        }
    },
    fouHp: {
        type: Number,
        min: 0,
        max: 2000,
        validate: {
            validator: MasterAccountValidators.isFouValueValid,
            message: ValidationStrings.GenericInvalidValue
        }
    },
    skills: {
        type: PlanServantEnhancementsSkillsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: PlanServantEnhancementsSkillsSchema,
        required: true,
        default: {}
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});