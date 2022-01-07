import { MasterServantAscensionLevel } from '../master/servant/master-servant-ascension-level.type';

export type PlanServantEnhancements = {

    level?: number;

    ascension?: MasterServantAscensionLevel;

    fouAtk?: number;

    fouHp?: number;

    skills: {

        1?: number;

        2?: number;

        3?: number;

    };
    
    appendSkills: {

        1?: number;

        2?: number;

        3?: number;

    };

    costumes: number[];

};
