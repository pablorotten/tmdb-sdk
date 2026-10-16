import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonAggregateCredit, SeasonAggregateCreditListMatch } from '../TmdbTypes';
declare class SeasonAggregateCreditEntity extends TmdbEntityBase<SeasonAggregateCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonAggregateCreditEntity): SeasonAggregateCreditEntity;
    list(this: any, reqmatch?: SeasonAggregateCreditListMatch, ctrl?: Control): Promise<SeasonAggregateCreditEntity[]>;
}
export { SeasonAggregateCreditEntity };
