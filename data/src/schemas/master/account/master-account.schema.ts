import { ObjectId } from 'bson';
import { SchemaDefinition } from 'mongoose';
import { CommonValidators, MasterAccountValidators, ValidationStrings } from '../../../validators';
import { GameItemQuantitySchema } from '../../game/item/game-item-quantity.schema';
import { MasterServantSchema } from '../servant/master-servant.schema';

/**
 * Mongoose schema definition for the `MasterAccount` type.
 */
export const MasterAccountSchemaDefinition: SchemaDefinition = {
    userId: {
        type: ObjectId,
        required: true,
        index: true
    },
    name: {
        type: String,
        trim: true,
        maxlength: 31
    },
    friendId: {
        type: String,
        validate: {
            validator: MasterAccountValidators.isFriendIdFormalValidOrEmpty,
            message: ValidationStrings.MasterFriendIdFormat
        },
        index: true
    },
    exp: {
        type: Number,
        min: 0,
        max: 367421977, // TODO Define this as a constant
        validate: {
            validator: CommonValidators.isNullOrInteger,
            message: ValidationStrings.NumberInteger
        },
        default: null
    },
    qp: {
        type: Number,
        required: true,
        min: 0,
        max: 999999999, // TODO Define this as a constant
        validate: {
            validator: Number.isInteger,
            message: ValidationStrings.NumberInteger
        },
        default: 0
    },
    items: {
        type: [GameItemQuantitySchema],
        required: true,
        default: []
    },
    servants: {
        type: [MasterServantSchema],
        required: true,
        validate: {
            validator: MasterAccountValidators.servantInstanceIdsUnique,
            message: ValidationStrings.MasterServantUniqueInstanceId
        },
        default: []
    },
    costumes: {
        type: [Number],
        required: true,
        default: []
    },
    bondLevels: {
        type: Map,
        of: {
            type: Number,
            min: 0,
            max: 15,
            validate: {
                validator: CommonValidators.isNullOrInteger,
                message: ValidationStrings.NumberInteger
            }
        },
        required: true,
        default: {}
    },
    soundtracks: {
        type: [Number],
        required: true,
        default: []
    }
};
