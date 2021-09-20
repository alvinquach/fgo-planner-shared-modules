import { ObjectId } from 'bson';
import { Document, Model, Query } from 'mongoose';
import { MasterAccount } from '../../types';
export declare type MasterAccountDocument = Document & MasterAccount;
/**
 * Mongoose document model definition for the `MasterAccount` type.
 */
declare type MasterAccountModel = Model<MasterAccountDocument> & {
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
export declare const MasterAccountModel: MasterAccountModel;
export {};
