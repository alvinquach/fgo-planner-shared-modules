import { ObjectId } from 'bson';
import { GameItemQuantity } from 'src/types/game/item/game-item-quantity.type';
import { Entity } from '../../entity.type';
import { MasterServantBondLevel } from '../servant/master-servant-bond-level.type';
import { MasterServant } from '../servant/master-servant.type';
export declare type MasterAccount = Entity<ObjectId> & {
    userId: ObjectId;
    /**
     * Account nickname.
     */
    name?: string;
    friendId?: string;
    exp?: number;
    qp: number;
    items: GameItemQuantity[];
    servants: MasterServant[];
    costumes: number[];
    bondLevels: Record<number, MasterServantBondLevel>;
    soundtracks: number[];
};
