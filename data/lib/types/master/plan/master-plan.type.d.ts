import { ObjectId } from 'bson';
import { Entity } from '../../entity.type';
import { GameItemQuantity } from '../../game/item/game-item-quantity.type';
import { MasterPlanServant } from './master-plan-servant.type';
export declare type MasterPlan = Entity<ObjectId> & {
    accountId: ObjectId;
    name: string;
    description: string;
    targetDate?: Date;
    autoUpdate: boolean;
    shared: boolean;
    servants: MasterPlanServant[];
    inventory: {
        items: GameItemQuantity[];
        qp: number;
    };
};
