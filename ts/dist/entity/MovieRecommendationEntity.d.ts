import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieRecommendation, MovieRecommendationLoadMatch } from '../TmdbTypes';
declare class MovieRecommendationEntity extends TmdbEntityBase<MovieRecommendation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieRecommendationEntity): MovieRecommendationEntity;
    load(this: any, reqmatch?: MovieRecommendationLoadMatch, ctrl?: Control): Promise<MovieRecommendationEntity>;
}
export { MovieRecommendationEntity };
