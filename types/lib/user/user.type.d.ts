import { Entity } from '../entity.type';
import { UserPreferences } from './user-preferences.type';
export declare type User<ID = string> = Entity<ID> & {
    username: string;
    hash?: string;
    email?: string;
    admin?: boolean;
    enabled: boolean;
    userPrefs: UserPreferences;
};
