import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieList, MovieListListMatch } from '../TmdbTypes';
declare class MovieListEntity extends TmdbEntityBase<MovieList> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieListEntity): MovieListEntity;
    list(this: any, reqmatch?: MovieListListMatch, ctrl?: Control): Promise<MovieListEntity[]>;
}
export { MovieListEntity };
