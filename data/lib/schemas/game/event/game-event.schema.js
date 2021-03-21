"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEventSchemaDefinition = void 0;
const game_event_reward_source_schema_1 = require("./game-event-reward-source.schema");
/**
 * Mongoose schema definition for the `GameEvent` type.
 */
exports.GameEventSchemaDefinition = {
    name: {
        type: String,
        required: true,
    },
    shortName: {
        type: String
    },
    startDate: {
        type: Date,
        required: true,
        index: true
    },
    endDate: {
        type: Date,
        required: true,
        index: true
    },
    rerun: {
        type: Boolean,
        required: true,
        index: true,
        default: false
    },
    rewardSources: {
        type: [game_event_reward_source_schema_1.GameEventRewardSourceSchema],
        required: true,
        default: []
    }
};
