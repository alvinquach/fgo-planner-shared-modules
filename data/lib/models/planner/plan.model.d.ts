import { ObjectId } from 'bson';
import { Document, Model, NativeError, Query } from 'mongoose';
import { Plan } from '../../types';
export declare type PlanDocument = Document & Plan;
/**
 * Mongoose document model definition for the `Plan` type.
 */
declare type PlanModel = Model<PlanDocument> & {
    /**
     * Finds the plans associated with the given `accountId`. Returns a simplified
     * version of the plan data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Array<Partial<PlanDocument>>) => void) => Query<Array<Partial<PlanDocument>>, PlanDocument>;
    /**
     * Removes all plans from a group with the given `groupId`.
     */
    removeFromGroup: (groupId: ObjectId, callback?: (err: NativeError, res: any) => void) => Query<any, PlanDocument>;
};
export declare const PlanModel: PlanModel;
export {};
