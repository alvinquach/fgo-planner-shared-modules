import { ObjectId } from 'bson';
import { Entity } from '@fgo-planner/types';
import { UserPreferences } from './user-preferences.type';
export declare type User = Entity<ObjectId> & {
    username: string;
    hash?: string;
    email?: string;
    admin?: boolean;
    enabled: boolean;
    userPrefs: UserPreferences;
};
