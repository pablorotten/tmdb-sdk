import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Season, SeasonLoadMatch } from '../TmdbTypes';
declare class SeasonEntity extends TmdbEntityBase<Season> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonEntity): SeasonEntity;
    load(this: any, reqmatch?: SeasonLoadMatch, ctrl?: Control): Promise<SeasonEntity>;
}
export { SeasonEntity };
