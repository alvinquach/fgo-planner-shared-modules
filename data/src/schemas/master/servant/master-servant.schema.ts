import { Schema, SchemaDefinition } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../../validators';

/**
 * Mongoose schema for the `MasterServant.skills` property.
 */
const MasterServantSkillLevelsSchema = new Schema({
    1: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
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
});

/**
 * Mongoose schema for the `MasterServant.appendSkills` property.
 */
const MasterServantAppendSkillLevelsSchema = new Schema({
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
});

/**
 * Mongoose schema for the `MasterServant` type.
 */
export const MasterServantSchema = new Schema({
    instanceId: {
        type: Number,
        required: true,
        validate: {
            // TODO This must be unique
            validator: Number.isInteger,
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
    np: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
    },
    level: {
        type: Number,
        required: true,
        min: 1,
        max: 120,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 1
    },
    ascension: {
        type: Number,
        required: true,
        min: 0,
        max: 4,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
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
        type: MasterServantSkillLevelsSchema,
        required: true,
        default: {}
    },
    appendSkills: {
        type: MasterServantAppendSkillLevelsSchema,
        required: true,
        default: {}
    },
    acquired: {
        type: Date
        // TODO Add range validation
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
