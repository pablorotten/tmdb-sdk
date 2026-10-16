import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Review, ReviewLoadMatch } from '../TmdbTypes';
declare class ReviewEntity extends TmdbEntityBase<Review> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ReviewEntity): ReviewEntity;
    load(this: any, reqmatch?: ReviewLoadMatch, ctrl?: Control): Promise<ReviewEntity>;
}
export { ReviewEntity };
