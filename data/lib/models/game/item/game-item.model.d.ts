import { Document, Model, NativeError, Query } from 'mongoose';
import { GameItem, GameItemUsage } from '../../../types';
export declare type GameItemDocument = Document & GameItem;
/**
 * Mongoose document model definition for the `GameItem` type.
 */
declare type GameItemModel = Model<GameItemDocument> & {
    /**
     * Creates a Query for retrieving the items that belong to any of the given
     * usages from the collection.
     */
    findByUsage: (usage: GameItemUsage | GameItemUsage[], callback?: (err: NativeError, res: GameItemDocument[]) => void) => Query<GameItemDocument[], GameItemDocument>;
};
export declare const GameItemModel: GameItemModel;
export {};
