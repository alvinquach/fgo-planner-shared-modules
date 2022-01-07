import { PlanServantEnhancements } from './plan-servant-enhancements.type';
import { PlanServantType } from './plan-servant-type.enum';

export type PlanServant = {

    type: PlanServantType;

    enabled: {

        servant: boolean;

        ascensions: boolean;

        skills: boolean;

        appendSkills: boolean;

        costumes: boolean;

    };

    current: PlanServantEnhancements;

    target: PlanServantEnhancements;

};
