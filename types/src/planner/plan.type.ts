import { Entity } from '../entity.type';
import { GameItemQuantity } from '../game/item/game-item-quantity.type';
import { PlanServant } from './plan-servant.type';

export type Plan<ID = string> = Entity<ID> & {

    accountId: ID;

    groupId?: ID;

    name: string;

    description: string;

    targetDate?: Date;

    enabled: {

        ascensions: boolean;

        skills: boolean;

        appendSkills: boolean;

        costumes: boolean;

    };

    /**
     * Whether to automatically update or sync the plan's servants and inventory
     * data with the latest master data.
     * 
     * @deprecated Auto-update is currently always enabled.
     */
    autoUpdate: boolean;

    shared: boolean;
    
    servants: Array<PlanServant>;

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
