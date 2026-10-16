import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvVideo, TvVideoListMatch } from '../TmdbTypes';
declare class TvVideoEntity extends TmdbEntityBase<TvVideo> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvVideoEntity): TvVideoEntity;
    list(this: any, reqmatch?: TvVideoListMatch, ctrl?: Control): Promise<TvVideoEntity[]>;
}
export { TvVideoEntity };
