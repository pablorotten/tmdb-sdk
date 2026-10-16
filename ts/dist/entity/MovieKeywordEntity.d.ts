import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieKeyword, MovieKeywordListMatch } from '../TmdbTypes';
declare class MovieKeywordEntity extends TmdbEntityBase<MovieKeyword> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieKeywordEntity): MovieKeywordEntity;
    list(this: any, reqmatch?: MovieKeywordListMatch, ctrl?: Control): Promise<MovieKeywordEntity[]>;
}
export { MovieKeywordEntity };
