import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieExternalId, MovieExternalIdLoadMatch } from '../TmdbTypes';
declare class MovieExternalIdEntity extends TmdbEntityBase<MovieExternalId> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieExternalIdEntity): MovieExternalIdEntity;
    load(this: any, reqmatch?: MovieExternalIdLoadMatch, ctrl?: Control): Promise<MovieExternalIdEntity>;
}
export { MovieExternalIdEntity };
