import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieImage, MovieImageListMatch } from '../TmdbTypes';
declare class MovieImageEntity extends TmdbEntityBase<MovieImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieImageEntity): MovieImageEntity;
    list(this: any, reqmatch?: MovieImageListMatch, ctrl?: Control): Promise<MovieImageEntity[]>;
}
export { MovieImageEntity };
