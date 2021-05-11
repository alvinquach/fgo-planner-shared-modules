import { Document, Model } from 'mongoose';
import { GameSoundtrack } from '../../../types';
export declare type GameSoundtrackDocument = Document & GameSoundtrack;
/**
 * Mongoose document model definition for the `GameSoundtrack` type.
 */
declare type GameSoundtrackModel = Model<GameSoundtrackDocument>;
export declare const GameSoundtrackModel: GameSoundtrackModel;
export {};
