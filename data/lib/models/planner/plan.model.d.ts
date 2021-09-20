import { ObjectId } from 'bson';
import { Document, Model, Query, UpdateWriteOpResult } from 'mongoose';
import { Plan } from '../../types';
export declare type PlanDocument = Document & Plan;
/**
 * Mongoose document model definition for the `Plan` type.
 */
declare type PlanModel = Model<PlanDocument> & {
    /**
     * Creates a query for retrieving the plans associated with the given
     * `accountId`. Result will contain simplified version of the plan data.
     */
    findByAccountId: (accountId: ObjectId) => Query<Array<Partial<PlanDocument>>, PlanDocument>;
    /**
     * Creates a query that removes all plans from a group with the given `groupId`.
     */
    removeFromGroup: (groupId: ObjectId) => Query<UpdateWriteOpResult, PlanDocument>;
};
export declare const PlanModel: PlanModel;
export {};
