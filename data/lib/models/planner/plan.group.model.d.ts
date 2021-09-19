import { ObjectId } from 'bson';
import { Document, Model, NativeError, Query } from 'mongoose';
import { PlanGroup } from '../../types';
export declare type PlanGroupDocument = Document & PlanGroup;
/**
 * Mongoose document model definition for the `Plan` type.
 */
declare type PlanGroupModel = Model<PlanGroupDocument> & {
    /**
     * Finds the plan groups associated with the given `accountId`. Returns a
     * simplified version of the plan group data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Partial<PlanGroupDocument>[]) => void) => Query<Partial<PlanGroupDocument>[], PlanGroupDocument>;
};
export declare const PlanGroupModel: PlanGroupModel;
export {};
