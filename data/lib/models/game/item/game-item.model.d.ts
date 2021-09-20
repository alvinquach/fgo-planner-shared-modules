import { Document, Model, Query } from 'mongoose';
import { GameItem, GameItemUsage } from '../../../types';
export declare type GameItemDocument = Document & GameItem;
/**
 * Mongoose document model definition for the `GameItem` type.
 */
declare type GameItemModel = Model<GameItemDocument> & {
    /**
     * Creates a query for retrieving the items that belong to any of the given
     * usages from the collection.
     */
    findByUsage: (usage: GameItemUsage | GameItemUsage[]) => Query<GameItemDocument[], GameItemDocument>;
};
export declare const GameItemModel: GameItemModel;
export {};
