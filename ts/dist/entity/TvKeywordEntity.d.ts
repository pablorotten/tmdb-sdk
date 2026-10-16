import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvKeyword, TvKeywordListMatch } from '../TmdbTypes';
declare class TvKeywordEntity extends TmdbEntityBase<TvKeyword> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvKeywordEntity): TvKeywordEntity;
    list(this: any, reqmatch?: TvKeywordListMatch, ctrl?: Control): Promise<TvKeywordEntity[]>;
}
export { TvKeywordEntity };
