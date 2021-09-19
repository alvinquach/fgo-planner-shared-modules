import { ObjectId } from 'bson';
import mongoose, { Document, Model, NativeError, Query, Schema } from 'mongoose';
import { PlanGroupSchemaDefinition } from '../../schemas';
import { PlanGroup } from '../../types';

export type PlanGroupDocument = Document & PlanGroup;

/**
 * Mongoose document model definition for the `Plan` type.
 */
type PlanGroupModel = Model<PlanGroupDocument> & {

    /**
     * Finds the plan groups associated with the given `accountId`. Returns a
     * simplified version of the plan group data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Partial<PlanGroupDocument>[]) => void) =>
        Query<Partial<PlanGroupDocument>[], PlanGroupDocument>;

};

//#region Static function implementations

const findByAccountId = function (
    this: PlanGroupModel,
    accountId: ObjectId,
    callback?: (err: NativeError, res: Partial<PlanGroupDocument>[]) => void
) {
    const projection = {
        name: 1,
        description: 1
    };
    return this.find({ accountId }, projection, {}, callback);
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    findByAccountId
};

/**
 * Mongoose schema for the `PlanGroup` type.
 */
const PlanGroupSchema = new Schema<PlanGroupDocument, PlanGroupModel>(PlanGroupSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(PlanGroupSchema.statics, Statics);

PlanGroupSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const PlanGroupModel = mongoose.model<PlanGroupDocument, PlanGroupModel>('PlanGroup', PlanGroupSchema, 'PlanGroups');
