import { ObjectId } from 'bson';
import { GameItemQuantity } from 'src/types/game/item/game-item-quantity.type';
import { Entity } from '../../entity.type';
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
