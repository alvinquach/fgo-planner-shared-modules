import { Entity } from '../entity.type';

export type PlanGroup<ID = string> = Entity<ID> & {

    accountId: ID;

    name: string;

    description: string;

};
