"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterPlanSchemaDefinition = void 0;
const bson_1 = require("bson");
const mongoose_1 = require("mongoose");
const validators_1 = require("../../../validators");
const master_item_schema_1 = require("../item/master-item.schema");
const master_plan_servant_schema_1 = require("./master-plan-servant.schema");
/**
 * Mongoose schema for the `MasterPlan.inventory` property.
 */
const MasterPlanInventorySchema = new mongoose_1.Schema({
    items: {
        type: [master_item_schema_1.MasterItemSchema],
        required: true,
        default: []
    },
    qp: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema definition for the `MasterPlan` type.
 */
exports.MasterPlanSchemaDefinition = {
    accountId: {
        type: bson_1.ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 31
    },
    description: {
        type: String
        // TODO Add length limit
    },
    targetDate: {
        type: Date,
        // TODO Add limits/validators
    },
    autoUpdate: {
        type: Boolean,
        required: true,
        default: false
    },
    shared: {
        type: Boolean,
        required: true,
        default: false
    },
    servants: {
        type: [master_plan_servant_schema_1.MasterPlanServantSchema],
        required: true,
        validate: {
            validator: validators_1.MasterAccountValidators.servantInstanceIdsUnique,
            message: validators_1.ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    inventory: {
        type: MasterPlanInventorySchema,
        required: true,
        default: {}
    }
};
