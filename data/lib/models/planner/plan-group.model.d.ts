import { ObjectId } from 'bson';
import { Document, Model, Query } from 'mongoose';
import { PlanGroup } from '../../types';
export declare type PlanGroupDocument = Document & PlanGroup;
/**
 * Mongoose document model definition for the `Plan` type.
 */
declare type PlanGroupModel = Model<PlanGroupDocument> & {
    /**
     * Creates a query for retrieving the plan groups associated with the given
     * `accountId`. Result will contain simplified version of the plan group data.
     */
    findByAccountId: (accountId: ObjectId) => Query<Array<Partial<PlanGroupDocument>>, PlanGroupDocument>;
};
export declare const PlanGroupModel: PlanGroupModel;
export {};
