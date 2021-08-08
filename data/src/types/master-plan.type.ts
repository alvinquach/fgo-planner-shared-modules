import { MasterPlan as BaseMasterPlan } from '@fgo-planner/types';
import { ObjectId } from 'bson';

export type MasterPlan = BaseMasterPlan<ObjectId>;
