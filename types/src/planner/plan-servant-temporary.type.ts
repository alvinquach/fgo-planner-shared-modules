import { PlanServant } from './plan-servant.type';
import { PlanServantType } from './plan-servant-type.type';

export type PlanServantTemporary = PlanServant & {

    type: PlanServantType.Temporary;

    collectionNo: number;

};
