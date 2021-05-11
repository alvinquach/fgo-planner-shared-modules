import mongoose, { Document, Model, Schema } from 'mongoose';
import { GameSoundtrackSchemaDefinition } from '../../../schemas';
import { GameSoundtrack } from '../../../types';

export type GameSoundtrackDocument = Document & GameSoundtrack;

/**
 * Mongoose document model definition for the `GameSoundtrack` type.
 */
type GameSoundtrackModel = Model<GameSoundtrackDocument>;

/**
 * Mongoose schema for the `GameSoundtrack` type.
 */
const GameSoundtrackSchema = new Schema<GameSoundtrackDocument, GameSoundtrackModel>(GameSoundtrackSchemaDefinition, { timestamps: true });

GameSoundtrackSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const GameSoundtrackModel = mongoose.model<GameSoundtrackDocument, GameSoundtrackModel>('GameSoundtrack', GameSoundtrackSchema, 'GameSoundtracks');
