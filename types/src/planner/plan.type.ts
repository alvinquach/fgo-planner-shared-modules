import { Entity } from '../entity.type';
import { PlanServant } from './plan-servant.type';
import { PlanUpcomingResources } from './plan-upcoming-resources.type';

export type Plan<ID = string> = Entity<ID> & {

    accountId: ID;

    groupId?: ID;

    name: string;

    description: string;

    targetDate?: Date;

    enabled: {

        ascensions: boolean;

        skills: boolean;

        appendSkills: boolean;

        costumes: boolean;

    };

    shared: boolean;
    
    servants: Array<PlanServant>;

    upcomingResources: Array<PlanUpcomingResources>;

};
