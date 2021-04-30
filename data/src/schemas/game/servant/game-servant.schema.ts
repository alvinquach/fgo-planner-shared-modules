import { Schema, SchemaDefinition } from 'mongoose';
import { GameServantAttribute, GameServantClass, GameServantGender } from '../../../types';
import { ValidationStrings } from '../../../validators';
import { ExternalLinkSchema } from '../../external-link.schema';
import { GameServantCostumeSchema } from './game-servant-costume.schema';
import { GameServantEnhancementSchema } from './game-servant-enhancement.schema';

/**
 * Mongoose schema for the `GameServant.skillMaterials` property.
 */
const GameServantSkillMaterialsSchema = new Schema({
    1: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    2: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    3: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    4: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    5: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    6: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    7: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    8: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    9: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `GameServant.ascensionMaterials` property.
 */
const GameServantAscensionMaterialsSchema = new Schema({
    1: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    2: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    3: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    },
    4: {
        type: GameServantEnhancementSchema,
        required: true,
        default: {}
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema for the `GameServant.metadata` property.
 */
const GameServantMetadataSchema = new Schema({
    displayName: {
        type: String
    },
    fgoManagerName: {
        type: String
    },
    links: {
        type: [ExternalLinkSchema],
        required: true,
        default: []
    }
} as SchemaDefinition, {
    _id: false,
    storeSubdocValidationError: false
});

/**
 * Mongoose schema definition for the `GameServant` data schema.
 */
export const GameServantSchemaDefinition: SchemaDefinition = {
    _id: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        }
    },
    collectionNo: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
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
        enum: Object.keys(GameServantClass),
        required: true,
        default: GameServantClass.Saber,
        index: true
    },
    rarity: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
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
            message: ValidationStrings.NumberInteger
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
            message: ValidationStrings.NumberInteger
        },
        default: 90
    },
    gender: {
        type: String,
        enum: Object.keys(GameServantGender),
        required: true,
        default: GameServantGender.Female
    },
    attribute: {
        type: String,
        enum: Object.keys(GameServantAttribute),
        required: true,
        default: GameServantAttribute.Earth
    },
    hpBase: {
        type: Number,
        required: true,
        min: 0,
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
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
            message: ValidationStrings.NumberInteger
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
            message: ValidationStrings.NumberInteger
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
            message: ValidationStrings.NumberInteger
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
            message: ValidationStrings.NumberInteger
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
        type: Schema.Types.Map,
        of: {
            type: GameServantCostumeSchema
        }
    },
    metadata: {
        type: GameServantMetadataSchema,
        required: true,
        default: {}
    }
};
