import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { AiringToday, AiringTodayListMatch } from '../TmdbTypes';
declare class AiringTodayEntity extends TmdbEntityBase<AiringToday> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: AiringTodayEntity): AiringTodayEntity;
    list(this: any, reqmatch?: AiringTodayListMatch, ctrl?: Control): Promise<AiringTodayEntity[]>;
}
export { AiringTodayEntity };
