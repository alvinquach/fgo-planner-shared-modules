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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const schemas_1 = require("../../schemas");
//#region Static function implementations
const setEnabledStatus = function (id, status, callback) {
    this.updateOne({ _id: id }, { active: status }, { new: true }, callback);
};
const setAdminStatus = function (id, isAdmin, callback) {
    const update = {};
    if (isAdmin) {
        update.$set = { admin: true };
    }
    else {
        update.$unset = { admin: null };
    }
    this.updateOne({ _id: id }, update, { new: true }, callback);
};
const getUserPreferences = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const doc = yield this.findById(id, { userPrefs: 1 });
        if (!doc) {
            return null;
        }
        return doc.userPrefs;
    });
};
//#endregion
/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    setEnabledStatus,
    setAdminStatus,
    getUserPreferences
};
/**
 * Mongoose schema for the `User` type.
 */
const UserSchema = new mongoose_1.Schema(schemas_1.UserSchemaDefinition, { timestamps: true });
// Add the static properties to the schema.
Object.assign(UserSchema.statics, Statics);
UserSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});
exports.UserModel = mongoose_1.default.model('User', UserSchema, 'Users');
