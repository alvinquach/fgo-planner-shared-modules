import { Entity } from '../../entity.type';
import { GameItemQuantity } from '../../game/item/game-item-quantity.type';
import { MasterPlanServant } from './master-plan-servant.type';

export type MasterPlan<ID = string> = Entity<ID> & {

    accountId: ID;

    name: string;

    description: string;

    targetDate?: Date;

    autoUpdate: boolean;

    shared: boolean;

    servants: MasterPlanServant[];

    inventory: {

        items: GameItemQuantity[];
    
        qp: number;
    
        // TODO Add embers and fous
    
    };

};
