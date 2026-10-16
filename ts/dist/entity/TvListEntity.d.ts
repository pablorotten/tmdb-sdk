import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvList, TvListListMatch } from '../TmdbTypes';
declare class TvListEntity extends TmdbEntityBase<TvList> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvListEntity): TvListEntity;
    list(this: any, reqmatch?: TvListListMatch, ctrl?: Control): Promise<TvListEntity[]>;
}
export { TvListEntity };
