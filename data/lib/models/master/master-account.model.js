"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterAccountModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const schemas_1 = require("../../schemas");
const validators_1 = require("../../validators");
//#region Static function implementations
const findByUserId = function (userId, callback) {
    const projection = {
        name: 1,
        friendId: 1
    };
    return this.find({ userId }, projection, {}, callback);
};
//#endregion
/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    isFriendIdFormatValid: validators_1.MasterAccountValidators.isFriendIdFormatValid,
    findByUserId
};
/**
 * Mongoose schema for the `MasterAccount` type.
 */
const MasterAccountSchema = new mongoose_1.Schema(schemas_1.MasterAccountSchemaDefinition, { timestamps: true });
// Add the static properties to the schema.
Object.assign(MasterAccountSchema.statics, Statics);
MasterAccountSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});
exports.MasterAccountModel = mongoose_1.default.model('MasterAccount', MasterAccountSchema, 'MasterAccounts');
