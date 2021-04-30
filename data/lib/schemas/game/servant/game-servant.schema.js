"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameServantSchemaDefinition = void 0;
const mongoose_1 = require("mongoose");
const types_1 = require("../../../types");
const validators_1 = require("../../../validators");
const external_link_schema_1 = require("../../external-link.schema");
const game_servant_costume_schema_1 = require("./game-servant-costume.schema");
const game_servant_enhancement_schema_1 = require("./game-servant-enhancement.schema");
/**
 * Mongoose schema for the `GameServant.skillMaterials` property.
 */
const GameServantSkillMaterialsSchema = new mongoose_1.Schema({
    1: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    2: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    3: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    4: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    5: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    6: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    7: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    8: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    9: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `GameServant.ascensionMaterials` property.
 */
const GameServantAscensionMaterialsSchema = new mongoose_1.Schema({
    1: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    2: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    3: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    4: {
        type: game_servant_enhancement_schema_1.GameServantEnhancementSchema,
        required: true,
        default: {}
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema for the `GameServant.metadata` property.
 */
const GameServantMetadataSchema = new mongoose_1.Schema({
    displayName: {
        type: String
    },
    fgoManagerName: {
        type: String
    },
    links: {
        type: [external_link_schema_1.ExternalLinkSchema],
        required: true,
        default: []
    }
}, {
    _id: false,
    storeSubdocValidationError: false
});
/**
 * Mongoose schema definition for the `GameServant` data schema.
 */
exports.GameServantSchemaDefinition = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        }
    },
    collectionNo: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        unique: true
    },
    name: {
        type: String,
        index: true
    },
    nameJp: {
        type: String
    },
    class: {
        type: String,
        enum: Object.keys(types_1.GameServantClass),
        required: true,
        default: types_1.GameServantClass.Saber,
        index: true
    },
    rarity: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 5,
        index: true
    },
    cost: {
        type: Number,
        required: true,
        min: 0,
        max: 16,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 16,
        index: true
    },
    maxLevel: {
        type: Number,
        required: true,
        min: 60,
        max: 90,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 90
    },
    gender: {
        type: String,
        enum: Object.keys(types_1.GameServantGender),
        required: true,
        default: types_1.GameServantGender.Female
    },
    attribute: {
        type: String,
        enum: Object.keys(types_1.GameServantAttribute),
        required: true,
        default: types_1.GameServantAttribute.Earth
    },
    hpBase: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    hpMax: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    atkBase: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    atkMax: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        index: true,
        default: 0
    },
    growthCurve: {
        type: Number,
        required: true,
        min: 0,
        max: 25,
        // TODO Validate specific values
        validate: {
            validator: Number.isInteger,
            message: validators_1.ValidationStrings.NumberInteger
        },
        default: 0
    },
    skillMaterials: {
        type: GameServantSkillMaterialsSchema,
        required: true,
        default: {}
    },
    ascensionMaterials: {
        type: GameServantAscensionMaterialsSchema
    },
    costume: {
        type: mongoose_1.Schema.Types.Map,
        of: {
            type: game_servant_costume_schema_1.GameServantCostumeSchema
        }
    },
    metadata: {
        type: GameServantMetadataSchema,
        required: true,
        default: {}
    }
};
