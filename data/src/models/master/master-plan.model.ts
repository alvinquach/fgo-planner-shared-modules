import { ObjectId } from 'bson';
import mongoose, { Document, Model, NativeError, Query, Schema } from 'mongoose';
import { MasterPlanSchemaDefinition } from '../../schemas';
import { MasterPlan } from '../../types';

export type MasterPlanDocument = Document & MasterPlan;

/**
 * Mongoose document model definition for the `MasterPlan` type.
 */
type MasterPlanModel = Model<MasterPlanDocument> & {

    /**
     * Finds the master plans associated with the given `accountId`. Returns a
     * simplified version of the master plan data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Partial<MasterPlanDocument>[]) => void) =>
        Query<Partial<MasterPlanDocument>[], MasterPlanDocument>;

};

//#region Static function implementations

const findByAccountId = function (
    this: MasterPlanModel,
    accountId: ObjectId,
    callback?: (err: NativeError, res: Partial<MasterPlanDocument>[]) => void
) {
    const projection = {
        name: 1,
        description: 1,
        targetDate: 1,
        autoUpdate: 1,
        shared: 1
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
 * Mongoose schema for the `MasterPlan` type.
 */
const MasterPlanSchema = new Schema<MasterPlanDocument, MasterPlanModel>(MasterPlanSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(MasterPlanSchema.statics, Statics);

MasterPlanSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const MasterPlanModel = mongoose.model<MasterPlanDocument, MasterPlanModel>('MasterPlan', MasterPlanSchema, 'MasterPlans');
