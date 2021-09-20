import { ObjectId } from 'bson';
import { Document, Model } from 'mongoose';
import { User, UserPreferences } from '../../types';
export declare type UserDocument = Document & User;
declare type UserModel = Model<UserDocument> & {
    setEnabledStatus: (id: ObjectId, status: boolean) => void;
    setAdminStatus: (id: ObjectId, isAdmin: boolean) => void;
    getUserPreferences: (id: ObjectId) => Promise<UserPreferences | null>;
};
export declare const UserModel: UserModel;
export {};
