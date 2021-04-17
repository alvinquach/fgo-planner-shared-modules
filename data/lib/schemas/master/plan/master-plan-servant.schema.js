"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterPlanServantSchema = exports.MasterPlanServantEnabledSchema = void 0;
const mongoose_1 = require("mongoose");
const master_plan_servant_enhancements_schema_1 = require("./master-plan-servant-enhancements.schema");
/**
 * Mongoose schema for the `MasterPlanServant.enabled` property.
 */
exports.MasterPlanServantEnabledSchema = new mongoose_1.Schema({
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
 * Mongoose schema for the `MasterPlanServant` type.
 */
exports.MasterPlanServantSchema = new mongoose_1.Schema({
    instanceId: {
        type: Number,
        required: true
    },
    enabled: {
        type: exports.MasterPlanServantEnabledSchema,
        required: true,
        default: {}
    },
    current: {
        type: master_plan_servant_enhancements_schema_1.MasterPlanServantEnhancementsSchema,
        required: true,
        default: {}
    },
    target: {
        type: master_plan_servant_enhancements_schema_1.MasterPlanServantEnhancementsSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
