import { PlanServant } from './plan-servant.type';
import { PlanServantType } from './plan-servant-type.enum';

export type PlanServantOwned = PlanServant & {

    type: PlanServantType.Owned;

    instanceId: number;

};
