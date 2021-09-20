import { Document, Model, Query } from 'mongoose';
import { GameServant, GameServantClass } from '../../../types';
export declare type GameServantDocument = Document & GameServant;
/**
 * Mongoose document model definition for the `GameItem` type.
 */
declare type GameServantModel = Model<GameServantDocument> & {
    /**
     * Creates a query to find a single document by its `collectionNo` field.
     */
    findByCollectionNo: (collectionNo: number) => Query<GameServantDocument, GameServantDocument>;
    /**
     * Creates a query for retrieving all the documents with the given `class` in
     * the collection.
     */
    findByClass: (cls: GameServantClass) => Query<GameServantDocument[], GameServantDocument>;
};
export declare const GameServantModel: GameServantModel;
export {};
