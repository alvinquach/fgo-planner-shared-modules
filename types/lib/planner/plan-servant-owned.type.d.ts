import { PlanServant } from './plan-servant.type';
import { PlanServantType } from './plan-servant-type.type';
export declare type PlanServantOwned = PlanServant & {
    type: PlanServantType.Owned;
    instanceId: number;
};
