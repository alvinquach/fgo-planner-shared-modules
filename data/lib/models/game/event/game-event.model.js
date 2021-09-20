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
exports.GameEventModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const schemas_1 = require("../../../schemas");
//#region Static function implementations
const findByYear = function (year) {
    const startDate = new Date(year, 0);
    const endDate = new Date(year + 1, 0);
    const dateQuery = {
        $gte: startDate,
        $lt: endDate
    };
    return this.find({ startDate: dateQuery });
};
//#endregion
/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByYear
};
/**
 * Mongoose schema for the `GameEvent` type.
 */
const GameEventSchema = new mongoose_1.Schema(schemas_1.GameEventSchemaDefinition, { timestamps: true });
// Add the static properties to the schema.
Object.assign(GameEventSchema.statics, Statics);
GameEventSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});
exports.GameEventModel = mongoose_1.default.model('GameEvent', GameEventSchema, 'GameEvents');
