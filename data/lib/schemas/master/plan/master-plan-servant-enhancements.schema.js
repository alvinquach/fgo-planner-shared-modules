"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterPlanServantEnhancementsSchema = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../../../validators");
/**
 * Mongoose schema for the `MasterPlanServantEnhancements.skills` property.
 */
const MasterPlanServantEnhancementsSkillsSchema = new mongoose_1.Schema({
    1: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    2: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    3: {
        type: Number,
        min: 1,
        max: 10,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    }
});
/**
 * Mongoose schema for the `MasterPlanServantEnhancements` type.
 */
exports.MasterPlanServantEnhancementsSchema = new mongoose_1.Schema({
    level: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    ascension: {
        type: Number,
        min: 0,
        max: 4,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    fouAtk: {
        type: Number,
        min: 0,
        max: 2000,
        validate: {
            validator: validators_1.MasterAccountValidators.isFouValueValid,
            message: validators_1.ValidationStrings.GenericInvalidValue
        }
    },
    fouHp: {
        type: Number,
        min: 0,
        max: 2000,
        validate: {
            validator: validators_1.MasterAccountValidators.isFouValueValid,
            message: validators_1.ValidationStrings.GenericInvalidValue
        }
    },
    skills: {
        type: MasterPlanServantEnhancementsSkillsSchema,
        required: true,
        default: {}
    },
    costumes: {
        type: [Number]
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
