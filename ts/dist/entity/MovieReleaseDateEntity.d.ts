import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieReleaseDate, MovieReleaseDateListMatch } from '../TmdbTypes';
declare class MovieReleaseDateEntity extends TmdbEntityBase<MovieReleaseDate> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieReleaseDateEntity): MovieReleaseDateEntity;
    list(this: any, reqmatch?: MovieReleaseDateListMatch, ctrl?: Control): Promise<MovieReleaseDateEntity[]>;
}
export { MovieReleaseDateEntity };
