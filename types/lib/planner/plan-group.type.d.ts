import { Entity } from '../entity.type';
export declare type PlanGroup<ID = string> = Entity<ID> & {
    accountId: ID;
    name: string;
    description: string;
};
