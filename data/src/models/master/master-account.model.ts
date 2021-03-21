import { ObjectId } from 'bson';
import mongoose, { Document, Model, NativeError, Query, Schema } from 'mongoose';
import { MasterAccountSchemaDefinition } from '../../schemas';
import { MasterAccount } from '../../types';
import { MasterAccountValidators } from '../../validators';


export type MasterAccountDocument = Document & MasterAccount;

/**
 * Mongoose document model definition for the `MasterAccount` type.
 */
type MasterAccountModel = Model<MasterAccountDocument> & {

    /**
     * Checks if the given friend ID string is in a valid format. Friend IDs must
     * be exactly 9 characters long and can only contain numerical digits.
     */
    isFriendIdFormatValid: (id: string) => boolean;

    /**
     * Finds the master accounts associated with the given `userId`. Returns a
     * simplified version of the master account data.
     */
    findByUserId: (userId: ObjectId, callback?: (err: NativeError, res: Partial<MasterAccountDocument>[]) => void) =>
        Query<Partial<MasterAccountDocument>[], MasterAccountDocument>;

};

//#region Static function implementations

const findByUserId = function (
    this: MasterAccountModel,
    userId: ObjectId,
    callback?: (err: NativeError, res: Partial<MasterAccountDocument>[]) => void
) {
    const projection = {
        name: 1,
        friendId: 1
    };
    return this.find({ userId }, projection, {}, callback);
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    isFriendIdFormatValid: MasterAccountValidators.isFriendIdFormatValid,
    findByUserId
};

/**
 * Mongoose schema for the `MasterAccount` type.
 */
const MasterAccountSchema = new Schema<MasterAccountDocument, MasterAccountModel>(MasterAccountSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(MasterAccountSchema.statics, Statics);

MasterAccountSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const MasterAccountModel = mongoose.model<MasterAccountDocument, MasterAccountModel>('MasterAccount', MasterAccountSchema, 'MasterAccounts');
