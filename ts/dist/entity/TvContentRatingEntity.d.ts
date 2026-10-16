import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvContentRating, TvContentRatingListMatch } from '../TmdbTypes';
declare class TvContentRatingEntity extends TmdbEntityBase<TvContentRating> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvContentRatingEntity): TvContentRatingEntity;
    list(this: any, reqmatch?: TvContentRatingListMatch, ctrl?: Control): Promise<TvContentRatingEntity[]>;
}
export { TvContentRatingEntity };
