import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvRecommendation, TvRecommendationListMatch } from '../TmdbTypes';
declare class TvRecommendationEntity extends TmdbEntityBase<TvRecommendation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvRecommendationEntity): TvRecommendationEntity;
    list(this: any, reqmatch?: TvRecommendationListMatch, ctrl?: Control): Promise<TvRecommendationEntity[]>;
}
export { TvRecommendationEntity };
