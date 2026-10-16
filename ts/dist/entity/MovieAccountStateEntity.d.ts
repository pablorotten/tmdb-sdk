import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieAccountState, MovieAccountStateLoadMatch } from '../TmdbTypes';
declare class MovieAccountStateEntity extends TmdbEntityBase<MovieAccountState> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieAccountStateEntity): MovieAccountStateEntity;
    load(this: any, reqmatch?: MovieAccountStateLoadMatch, ctrl?: Control): Promise<MovieAccountStateEntity>;
}
export { MovieAccountStateEntity };
