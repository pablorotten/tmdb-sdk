import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieReview, MovieReviewListMatch } from '../TmdbTypes';
declare class MovieReviewEntity extends TmdbEntityBase<MovieReview> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieReviewEntity): MovieReviewEntity;
    list(this: any, reqmatch?: MovieReviewListMatch, ctrl?: Control): Promise<MovieReviewEntity[]>;
}
export { MovieReviewEntity };
