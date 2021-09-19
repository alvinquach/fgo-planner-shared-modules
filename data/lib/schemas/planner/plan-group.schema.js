"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanGroupSchemaDefinition = void 0;
const bson_1 = require("bson");
/**
 * Mongoose schema definition for the `PlanGroup` type.
 */
exports.PlanGroupSchemaDefinition = {
    accountId: {
        type: bson_1.ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 63
    },
    description: {
        type: String
        // TODO Add length limit
    }
};
