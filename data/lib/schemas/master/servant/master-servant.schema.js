"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterServantSchema = void 0;
const mongoose_1 = require("mongoose");
const validators_1 = require("../../../validators");
/**
 * Mongoose schema for the `MasterServant.skills` property.
 */
const MasterServantSkillLevelsSchema = new mongoose_1.Schema({
    1: {
        type: Number,
        required: true,
        min: 1,
        max: 10,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 1
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
 * Mongoose schema for the `MasterServant` type.
 */
exports.MasterServantSchema = new mongoose_1.Schema({
    instanceId: {
        type: Number,
        required: true,
        validate: {
            // TODO This must be unique
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    gameId: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    np: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 1
    },
    level: {
        type: Number,
        required: true,
        min: 1,
        max: 100,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
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
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 0
    },
    bond: {
        type: Number,
        min: 0,
        max: 15,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
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
        type: MasterServantSkillLevelsSchema,
        required: true,
        default: {}
    },
    costumes: {
        type: [Number]
    },
    acquired: {
        type: Date
        // TODO Add range validation
    }
}, { _id: false, storeSubdocValidationError: false });
