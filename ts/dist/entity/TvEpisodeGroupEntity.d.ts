import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvEpisodeGroup, TvEpisodeGroupListMatch } from '../TmdbTypes';
declare class TvEpisodeGroupEntity extends TmdbEntityBase<TvEpisodeGroup> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvEpisodeGroupEntity): TvEpisodeGroupEntity;
    list(this: any, reqmatch?: TvEpisodeGroupListMatch, ctrl?: Control): Promise<TvEpisodeGroupEntity[]>;
}
export { TvEpisodeGroupEntity };
