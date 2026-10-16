import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonChange, SeasonChangeListMatch } from '../TmdbTypes';
declare class SeasonChangeEntity extends TmdbEntityBase<SeasonChange> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonChangeEntity): SeasonChangeEntity;
    list(this: any, reqmatch?: SeasonChangeListMatch, ctrl?: Control): Promise<SeasonChangeEntity[]>;
}
export { SeasonChangeEntity };
