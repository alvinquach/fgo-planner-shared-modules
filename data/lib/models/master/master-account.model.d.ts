import { ObjectId } from 'bson';
import { Document, Model, NativeError, Query } from 'mongoose';
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
     * Finds the master accounts associated with the given `userId`. Returns a
     * simplified version of the master account data.
     */
    findByUserId: (userId: ObjectId, callback?: (err: NativeError, res: Partial<MasterAccountDocument>[]) => void) => Query<Partial<MasterAccountDocument>[], MasterAccountDocument>;
};
export declare const MasterAccountModel: MasterAccountModel;
export {};
