import { MasterServant } from '../servant/master-servant.type';
export declare type MasterPlanServantEnhancements = {
    skills: {
        1?: number;
        2?: number;
        3?: number;
    };
} & Partial<Pick<MasterServant, 'level' | 'ascension' | 'fouAtk' | 'fouHp' | 'costumes'>>;
