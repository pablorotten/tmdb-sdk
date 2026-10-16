import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Timezone, TimezoneListMatch } from '../TmdbTypes';
declare class TimezoneEntity extends TmdbEntityBase<Timezone> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TimezoneEntity): TimezoneEntity;
    list(this: any, reqmatch?: TimezoneListMatch, ctrl?: Control): Promise<TimezoneEntity[]>;
}
export { TimezoneEntity };
