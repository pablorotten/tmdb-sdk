import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvReview, TvReviewListMatch } from '../TmdbTypes';
declare class TvReviewEntity extends TmdbEntityBase<TvReview> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvReviewEntity): TvReviewEntity;
    list(this: any, reqmatch?: TvReviewListMatch, ctrl?: Control): Promise<TvReviewEntity[]>;
}
export { TvReviewEntity };
