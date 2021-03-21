import { MasterServantAscensionLevel } from './master-servant-ascension-level.type';
import { MasterServantBondLevel } from './master-servant-bond-level.type';
import { MasterServantNoblePhantasmLevel } from './master-servant-noble-phantasm-level.type';
/**
 * Represents an instance of a servant that is owned by a master.
 */
export declare type MasterServant = {
    instanceId: number;
    gameId: number;
    np: MasterServantNoblePhantasmLevel;
    level: number;
    ascension: MasterServantAscensionLevel;
    bond?: MasterServantBondLevel;
    fouAtk?: number;
    fouHp?: number;
    skills: {
        1: number;
        2?: number;
        3?: number;
    };
    costumes?: number[];
    acquired?: Date;
};
