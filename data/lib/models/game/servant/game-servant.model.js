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
exports.GameServantModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const schemas_1 = require("../../../schemas");
//#region Static function implementations
const findByCollectionNo = function (collectionNo, callback) {
    return this.findOne({ collectionNo }, callback);
};
const findByClass = function (cls, callback) {
    return this.find({ class: cls }, callback);
};
//#endregion
/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByCollectionNo,
    findByClass
};
/**
 * Mongoose schema for the `GameServant` type.
 */
const GameServantSchema = new mongoose_1.Schema(schemas_1.GameServantSchemaDefinition, { timestamps: true });
// Add the static properties to the schema.
Object.assign(GameServantSchema.statics, Statics);
GameServantSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});
// Add text index
// TODO Redo this
/*
GameServantSchema.index(
    GameObjectSchemaTextIndex,
    {
        name: 'textIndex',
        weights: {
            urlPath: 5,
            name: 5,
            nameJp: 3,
        }
    }
);
*/
exports.GameServantModel = mongoose_1.default.model('GameServant', GameServantSchema, 'GameServants');
