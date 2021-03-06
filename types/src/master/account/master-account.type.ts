import { Entity } from '../../entity.type';
import { GameEmberQuantities } from '../../game/ember/game-ember-quantities.type';
import { GameItemQuantity } from '../../game/item/game-item-quantity.type';
import { MasterServantBondLevel } from '../servant/master-servant-bond-level.type';
import { MasterServant } from '../servant/master-servant.type';

export type MasterAccount<ID = string> = Entity<ID> & {

    userId: ID;

    /**
     * Account nickname.
     */
    name?: string;

    friendId?: string;

    exp?: number;

    resources: {

        items: Array<GameItemQuantity>;

        embers: GameEmberQuantities;

        qp: number;

    };

    servants: MasterServant[];

    costumes: number[];
    
    bondLevels: Record<number, MasterServantBondLevel>;

    soundtracks: number[];

};
