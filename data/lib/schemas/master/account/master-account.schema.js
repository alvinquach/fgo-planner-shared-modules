"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterAccountSchemaDefinition = void 0;
const bson_1 = require("bson");
const game_item_quantity_schema_1 = require("src/schemas/game/item/game-item-quantity.schema");
const validators_1 = require("../../../validators");
const master_servant_schema_1 = require("../servant/master-servant.schema");
/**
 * Mongoose schema definition for the `MasterAccount` type.
 */
exports.MasterAccountSchemaDefinition = {
    userId: {
        type: bson_1.ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 31
    },
    friendId: {
        type: String,
        validate: {
            validator: validators_1.MasterAccountValidators.isFriendIdFormalValidOrEmpty,
            message: validators_1.ValidationStrings.MasterFriendIdFormat
        },
        index: true
    },
    exp: {
        type: Number,
        min: 0,
        max: 367421977,
        validate: {
            validator: validators_1.CommonValidators.isNullOrInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: null
    },
    qp: {
        type: Number,
        required: true,
        min: 0,
        max: 999999999,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 0
    },
    items: {
        type: [game_item_quantity_schema_1.GameItemQuantitySchema],
        required: true,
        default: []
    },
    servants: {
        type: [master_servant_schema_1.MasterServantSchema],
        required: true,
        validate: {
            validator: validators_1.MasterAccountValidators.servantInstanceIdsUnique,
            message: validators_1.ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    },
    bondLevels: {
        type: Map,
        of: {
            type: Number,
            min: 0,
            max: 15,
            validate: {
                validator: validators_1.CommonValidators.isNullOrInteger,
                message: validators_1.ValidationStrings.NumberInteger
            }
        },
        required: true,
        default: {}
    },
    soundtracks: {
        type: [Number],
        required: true,
        default: []
    }
};
