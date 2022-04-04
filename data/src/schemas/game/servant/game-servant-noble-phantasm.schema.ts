import { GameServantCardType, GameServantNoblePhantasmTarget } from '@fgo-planner/types';
import { Schema, SchemaDefinition } from 'mongoose';

/**
 * Mongoose schema for the `GameServantNoblePhantasm` type.
 */
export const GameServantNoblePhantasmSchema = new Schema({
    cardType: {
        type: String,
        enum: Object.keys(GameServantCardType),
        required: true,
        default: GameServantCardType.Arts
    },
    target: {
        type: String,
        enum: Object.keys(GameServantNoblePhantasmTarget),
        required: true,
        default: GameServantNoblePhantasmTarget.Support
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});
