import { Document, Model, NativeError } from 'mongoose';
import { User } from '../../types';
export declare type UserDocument = Document & User;
declare type UserModel = Model<UserDocument> & {
    setEnabledStatus: (id: string, status: boolean, callback: (err: NativeError, doc: UserDocument) => void) => void;
    setAdminStatus: (id: string, isAdmin: boolean, callback: (err: NativeError, doc: UserDocument) => void) => void;
};
export declare const UserModel: UserModel;
export {};
