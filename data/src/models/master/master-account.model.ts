import { ObjectId } from 'bson';
import mongoose, { Document, Model, Query, Schema } from 'mongoose';
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
     * Creates a query for retrieving the master accounts associated with the given
     * `userId`. Result will contain simplified version of the master account data.
     */
    findByUserId: (userId: ObjectId) => Query<Array<Partial<MasterAccountDocument>>, MasterAccountDocument>;

};

//#region Static function implementations

const findByUserId = function (
    this: MasterAccountModel,
    userId: ObjectId
): Query<Array<Partial<MasterAccountDocument>>, MasterAccountDocument> {
    const projection = {
        name: 1,
        friendId: 1
    };
    return this.find({ userId }, projection, {});
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
