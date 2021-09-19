import { ObjectId } from 'bson';
import mongoose, { Document, Model, NativeError, Query, Schema } from 'mongoose';
import { PlanSchemaDefinition } from '../../schemas';
import { Plan } from '../../types';

export type PlanDocument = Document & Plan;

/**
 * Mongoose document model definition for the `Plan` type.
 */
type PlanModel = Model<PlanDocument> & {

    /**
     * Finds the master plans associated with the given `accountId`. Returns a
     * simplified version of the master plan data.
     */
    findByAccountId: (accountId: ObjectId, callback?: (err: NativeError, res: Partial<PlanDocument>[]) => void) =>
        Query<Partial<PlanDocument>[], PlanDocument>;

};

//#region Static function implementations

const findByAccountId = function (
    this: PlanModel,
    accountId: ObjectId,
    callback?: (err: NativeError, res: Partial<PlanDocument>[]) => void
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
 * Mongoose schema for the `Plan` type.
 */
const PlanSchema = new Schema<PlanDocument, PlanModel>(PlanSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(PlanSchema.statics, Statics);

PlanSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const PlanModel = mongoose.model<PlanDocument, PlanModel>('Plan', PlanSchema, 'Plans');
