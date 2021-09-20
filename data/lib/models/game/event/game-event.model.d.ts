import { Document, Model, Query } from 'mongoose';
import { GameEvent } from '../../../types';
export declare type GameEventDocument = Document & GameEvent;
/**
 * Mongoose document model definition for the `GameEvent` type.
 */
declare type GameEventModel = Model<GameEventDocument> & {
    /**
     * Creates a query for retrieving the events that start in the given year.
     */
    findByYear: (year: number) => Query<GameEventDocument[], GameEventDocument>;
};
export declare const GameEventModel: GameEventModel;
export {};
