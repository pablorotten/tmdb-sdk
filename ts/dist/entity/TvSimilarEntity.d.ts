import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvSimilar, TvSimilarListMatch } from '../TmdbTypes';
declare class TvSimilarEntity extends TmdbEntityBase<TvSimilar> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvSimilarEntity): TvSimilarEntity;
    list(this: any, reqmatch?: TvSimilarListMatch, ctrl?: Control): Promise<TvSimilarEntity[]>;
}
export { TvSimilarEntity };
