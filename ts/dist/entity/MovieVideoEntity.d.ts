import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieVideo, MovieVideoListMatch } from '../TmdbTypes';
declare class MovieVideoEntity extends TmdbEntityBase<MovieVideo> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieVideoEntity): MovieVideoEntity;
    list(this: any, reqmatch?: MovieVideoListMatch, ctrl?: Control): Promise<MovieVideoEntity[]>;
}
export { MovieVideoEntity };
