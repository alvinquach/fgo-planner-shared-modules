import { ObjectId } from 'bson';
import { Document, Model, NativeError, Query } from 'mongoose';
import { MasterPlan } from '../../types';
export declare type MasterPlanDocument = Document & MasterPlan;
/**
 * Mongoose document model definition for the `MasterPlan` type.
 */
declare type MasterPlanModel = Model<MasterPlanDocument> & {
    /**
     * Finds the master plans associated with the given `accountId`. Returns a
     * simplified version of the master plan data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Partial<MasterPlanDocument>[]) => void) => Query<Partial<MasterPlanDocument>[], MasterPlanDocument>;
};
export declare const MasterPlanModel: MasterPlanModel;
export {};
