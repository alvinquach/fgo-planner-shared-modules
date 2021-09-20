import mongoose, { Document, Model, Query, Schema } from 'mongoose';
import { GameItemSchemaDefinition } from '../../../schemas';
import { GameItem, GameItemUsage } from '../../../types';

export type GameItemDocument = Document & GameItem;

/**
 * Mongoose document model definition for the `GameItem` type.
 */
type GameItemModel = Model<GameItemDocument> & {

    /**
     * Creates a query for retrieving the items that belong to any of the given
     * usages from the collection.
     */
    findByUsage: (usage: GameItemUsage | GameItemUsage[]) => Query<GameItemDocument[], GameItemDocument>;

};

//#region Static function implementations

const findByUsage = function (
    this: GameItemModel,
    usage: GameItemUsage | GameItemUsage[]
): Query<GameItemDocument[], GameItemDocument> {
    if (!Array.isArray(usage)) {
        usage = [usage];
    }
    return this.find({ uses: { $in: usage } });
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByUsage
};

/**
 * Mongoose schema for the `GameItem` type.
 */
const GameItemSchema = new Schema<GameItemDocument, GameItemModel>(GameItemSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(GameItemSchema.statics, Statics);

GameItemSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const GameItemModel = mongoose.model<GameItemDocument, GameItemModel>('GameItem', GameItemSchema, 'GameItems');
