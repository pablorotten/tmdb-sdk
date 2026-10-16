import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Upcoming, UpcomingListMatch } from '../TmdbTypes';
declare class UpcomingEntity extends TmdbEntityBase<Upcoming> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: UpcomingEntity): UpcomingEntity;
    list(this: any, reqmatch?: UpcomingListMatch, ctrl?: Control): Promise<UpcomingEntity[]>;
}
export { UpcomingEntity };
