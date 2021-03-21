import { Document, Model, NativeError, Query } from 'mongoose';
import { GameServant, GameServantClass } from '../../../types';
export declare type GameServantDocument = Document & GameServant;
/**
 * Mongoose document model definition for the `GameItem` type.
 */
declare type GameServantModel = Model<GameServantDocument> & {
    /**
     * Creates a Query to find a single document by its `collectionNo` field.
     */
    findByCollectionNo: (collectionNo: number, callback?: (err: NativeError, res: GameServantDocument) => void) => Query<GameServantDocument, GameServantDocument>;
    /**
     * Creates a Query for retrieving all the documents with the given `class` in
     * the collection.
     */
    findByClass: (cls: GameServantClass, callback?: (err: NativeError, res: GameServantDocument[]) => void) => Query<GameServantDocument[], GameServantDocument>;
};
export declare const GameServantModel: GameServantModel;
export {};
