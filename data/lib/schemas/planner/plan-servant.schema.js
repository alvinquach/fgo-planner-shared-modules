"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanServantSchema = exports.PlanServantEnabledSchema = void 0;
const types_1 = require("@fgo-planner/types");
const mongoose_1 = require("mongoose");
const validators_1 = require("../../validators");
const plan_servant_enhancements_schema_1 = require("./plan-servant-enhancements.schema");
/**
 * Mongoose schema for the `PlanServant.enabled` property.
 */
exports.PlanServantEnabledSchema = new mongoose_1.Schema({
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
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `PlanServant` type.
 */
exports.PlanServantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: Object.keys(types_1.PlanServantType),
        required: true
    },
    instanceId: {
        type: Number,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    collectionNo: {
        type: Number,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    enabled: {
        type: exports.PlanServantEnabledSchema,
        required: true,
        default: {}
    },
    current: {
        type: plan_servant_enhancements_schema_1.PlanServantEnhancementsSchema,
        required: true,
        default: {}
    },
    target: {
        type: plan_servant_enhancements_schema_1.PlanServantEnhancementsSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
