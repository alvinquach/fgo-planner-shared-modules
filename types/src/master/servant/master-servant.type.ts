import { MasterServantAscensionLevel } from './master-servant-ascension-level.type';
import { MasterServantBondLevel } from './master-servant-bond-level.type';
import { MasterServantNoblePhantasmLevel } from './master-servant-noble-phantasm-level.type';

/**
 * Represents an instance of a servant that is owned by a master.
 */
export type MasterServant = {

    instanceId: number;

    gameId: number;
    
    np: MasterServantNoblePhantasmLevel;

    level: number;

    ascension: MasterServantAscensionLevel;

    /**
     * @deprecated Bond levels are now stored at the account level.
     */
    bond?: MasterServantBondLevel;

    fouAtk?: number;

    fouHp?: number;

    skills: {

        1: number;

        2?: number;

        3?: number;

    };

    appendSkills: {

        1?: number;

        2?: number;

        3?: number;

    };

    acquired?: Date;

};
