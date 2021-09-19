import { PlanServant } from './plan-servant.type';
import { PlanServantType } from './plan-servant-type.type';

export type PlanServantOwned = PlanServant & {

    type: PlanServantType.Owned;

    instanceId: number;

};
