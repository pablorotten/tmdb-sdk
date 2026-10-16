import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieChange, MovieChangeListMatch } from '../TmdbTypes';
declare class MovieChangeEntity extends TmdbEntityBase<MovieChange> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieChangeEntity): MovieChangeEntity;
    list(this: any, reqmatch?: MovieChangeListMatch, ctrl?: Control): Promise<MovieChangeEntity[]>;
}
export { MovieChangeEntity };
