import { ObjectId } from 'bson';
import { Document, Model, NativeError, Query } from 'mongoose';
import { Plan } from '../../types';
export declare type PlanDocument = Document & Plan;
/**
 * Mongoose document model definition for the `Plan` type.
 */
declare type PlanModel = Model<PlanDocument> & {
    /**
     * Finds the master plans associated with the given `accountId`. Returns a
     * simplified version of the master plan data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Partial<PlanDocument>[]) => void) => Query<Partial<PlanDocument>[], PlanDocument>;
};
export declare const PlanModel: PlanModel;
export {};
