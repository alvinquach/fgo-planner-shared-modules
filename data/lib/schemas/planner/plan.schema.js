"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanSchemaDefinition = void 0;
const bson_1 = require("bson");
const mongoose_1 = require("mongoose");
const validators_1 = require("../../validators");
const game_item_quantity_schema_1 = require("../game/item/game-item-quantity.schema");
const plan_servant_schema_1 = require("./plan-servant.schema");
/**
 * Mongoose schema for the `Plan.inventory` property.
 */
const PlanInventorySchema = new mongoose_1.Schema({
    items: {
        type: [game_item_quantity_schema_1.GameItemQuantitySchema],
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
 * Mongoose schema definition for the `Plan` type.
 */
exports.PlanSchemaDefinition = {
    accountId: {
        type: bson_1.ObjectId,
        required: true,
        index: true
    },
    groupId: {
        type: bson_1.ObjectId,
        sparse: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 63
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
        type: [plan_servant_schema_1.PlanServantSchema],
        required: true,
        validate: {
            validator: validators_1.MasterAccountValidators.servantInstanceIdsUnique,
            message: validators_1.ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    inventory: {
        type: PlanInventorySchema,
        required: true,
        default: {}
    }
};
