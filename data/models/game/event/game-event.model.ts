import mongoose, { Document, Model, NativeError, Query, Schema } from 'mongoose';
import { GameEventSchemaDefinition } from '../../../schemas';
import { GameEvent } from '../../../types';

export type GameEventDocument = Document & GameEvent;

/**
 * Mongoose document model definition for the `GameEvent` type.
 */
type GameEventModel = Model<GameEventDocument> & {

    /**
     * Creates a Query for retrieving the events that start in the given year.
     */
    findByYear: (year: number, callback?: (err: NativeError, res: GameEventDocument[]) => void) =>
        Query<GameEventDocument[], GameEventDocument>;

};

//#region Static function implementations

const findByYear = function (
    this: GameEventModel,
    year: number,
    callback?: (err: NativeError, res: GameEventDocument[]) => void
) {
    const startDate = new Date(year, 0);
    const endDate = new Date(year + 1, 0);
    const dateQuery = {
        $gte: startDate,
        $lt: endDate
    };
    return this.findOne({ startDate: dateQuery }, callback);
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
const GameEventSchema = new Schema<GameEventDocument, GameEventModel>(GameEventSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(GameEventSchema.statics, Statics);

GameEventSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const GameEventModel = mongoose.model<GameEventDocument, GameEventModel>('GameEvent', GameEventSchema, 'GameEvents');
