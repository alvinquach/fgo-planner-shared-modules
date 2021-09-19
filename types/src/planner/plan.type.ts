import { Entity } from '../entity.type';
import { GameItemQuantity } from '../game/item/game-item-quantity.type';
import { PlanServantOwned } from './plan-servant-owned.type';
import { PlanServantTemporary } from './plan-servant-temporary.type';

export type Plan<ID = string> = Entity<ID> & {

    accountId: ID;

    groupId?: ID;

    name: string;

    description: string;

    targetDate?: Date;

    /**
     * Whether to automatically update or sync the plan's servants and inventory
     * data with the latest master data.
     * 
     * @deprecated Auto-update is currently always enabled.
     */
    autoUpdate: boolean;

    shared: boolean;

    servants: Array<PlanServantOwned | PlanServantTemporary>;

    /**
     * Cached inventory data. Used when auto-update is disabled.
     * 
     * @deprecated Auto-update is currently always enabled.
     */
    inventory: {

        items: Array<GameItemQuantity>;
    
        qp: number;
    
        // TODO Add embers and fous
    
    };

};
