import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvImage, TvImageListMatch } from '../TmdbTypes';
declare class TvImageEntity extends TmdbEntityBase<TvImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvImageEntity): TvImageEntity;
    list(this: any, reqmatch?: TvImageListMatch, ctrl?: Control): Promise<TvImageEntity[]>;
}
export { TvImageEntity };
