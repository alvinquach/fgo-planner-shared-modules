import { PlanServant } from './plan-servant.type';
import { PlanServantType } from './plan-servant-type.enum';

export type PlanServantUnowned = PlanServant & {

    type: PlanServantType.Unowned;

};
