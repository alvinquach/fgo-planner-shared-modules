import { PlanServantEnhancements } from './plan-servant-enhancements.type';
import { PlanServantType } from './plan-servant-type.type';
export declare type PlanServant = {
    type: PlanServantType;
    enabled: {
        servant: boolean;
        ascensions: boolean;
        skills: boolean;
        costumes: boolean;
    };
    current: PlanServantEnhancements;
    target: PlanServantEnhancements;
};
