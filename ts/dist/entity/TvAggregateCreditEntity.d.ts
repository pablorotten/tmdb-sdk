import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvAggregateCredit, TvAggregateCreditListMatch } from '../TmdbTypes';
declare class TvAggregateCreditEntity extends TmdbEntityBase<TvAggregateCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvAggregateCreditEntity): TvAggregateCreditEntity;
    list(this: any, reqmatch?: TvAggregateCreditListMatch, ctrl?: Control): Promise<TvAggregateCreditEntity[]>;
}
export { TvAggregateCreditEntity };
