import { ObjectId } from 'bson';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { UserSchemaDefinition } from '../../schemas';
import { User, UserPreferences } from '../../types';

export type UserDocument = Document & User;

type UserModel = Model<UserDocument> & {

    setEnabledStatus: (id: ObjectId, status: boolean) => void;

    setAdminStatus: (id: ObjectId, isAdmin: boolean) => void;

    getUserPreferences: (id: ObjectId) => Promise<UserPreferences | null>;

};

//#region Static function implementations

const setEnabledStatus = function (
    this: UserModel,
    id: ObjectId,
    status: boolean
): void {
    this.updateOne({ _id: id }, { active: status }, { new: true });
};

const setAdminStatus = function (this: UserModel,
    id: ObjectId,
    isAdmin: boolean
): void {
    const update: any = {};
    if (isAdmin) {
        update.$set = { admin: true };
    } else {
        update.$unset = { admin: null };
    }
    this.updateOne({ _id: id }, update, { new: true });
};

const getUserPreferences = async function (
    this: UserModel,
    id: ObjectId
): Promise<UserPreferences | null> {
    const doc = await this.findById(id, { userPrefs: 1 });
    if (!doc) {
        return null;
    }
    return doc.userPrefs;
};

//#endregion

/**
 * Properties and functions that can be assigned as statics on the schema.
 */
const Statics = {
    setEnabledStatus,
    setAdminStatus,
    getUserPreferences
};

/**
 * Mongoose schema for the `User` type.
 */
const UserSchema = new Schema<UserDocument, UserModel>(UserSchemaDefinition, { timestamps: true });

// Add the static properties to the schema.
Object.assign(UserSchema.statics, Statics);

UserSchema.set('toJSON', {
    // virtuals: true,
    versionKey: false,
});

export const UserModel = mongoose.model<UserDocument, UserModel>('User', UserSchema, 'Users');