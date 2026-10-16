import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Movie, MovieLoadMatch, MovieListMatch, MovieCreateData, MovieRemoveMatch } from '../TmdbTypes';
declare class MovieEntity extends TmdbEntityBase<Movie> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieEntity): MovieEntity;
    load(this: any, reqmatch?: MovieLoadMatch, ctrl?: Control): Promise<MovieEntity>;
    list(this: any, reqmatch?: MovieListMatch, ctrl?: Control): Promise<MovieEntity[]>;
    create(this: any, reqdata?: MovieCreateData, ctrl?: Control): Promise<MovieEntity>;
    remove(this: any, reqmatch?: MovieRemoveMatch, ctrl?: Control): Promise<MovieEntity>;
}
export { MovieEntity };
