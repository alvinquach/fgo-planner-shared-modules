import { ObjectId } from 'bson';
import { Entity } from '../../entity.type';
import { MasterItem } from '../item/master-item.type';
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
        items: MasterItem[];
        qp: number;
    };
};
