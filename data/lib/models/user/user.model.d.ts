import { ObjectId } from 'bson';
import { Document, Model, NativeError } from 'mongoose';
import { User, UserPreferences } from '../../types';
export declare type UserDocument = Document & User;
declare type UserModel = Model<UserDocument> & {
    setEnabledStatus: (id: ObjectId, status: boolean, callback: (err: NativeError, doc: UserDocument) => void) => void;
    setAdminStatus: (id: ObjectId, isAdmin: boolean, callback: (err: NativeError, doc: UserDocument) => void) => void;
    getUserPreferences: (id: ObjectId) => Promise<UserPreferences | null>;
};
export declare const UserModel: UserModel;
export {};
