import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieSimilar, MovieSimilarListMatch } from '../TmdbTypes';
declare class MovieSimilarEntity extends TmdbEntityBase<MovieSimilar> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieSimilarEntity): MovieSimilarEntity;
    list(this: any, reqmatch?: MovieSimilarListMatch, ctrl?: Control): Promise<MovieSimilarEntity[]>;
}
export { MovieSimilarEntity };
