import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { KeywordMovie, KeywordMovieListMatch } from '../TmdbTypes';
declare class KeywordMovieEntity extends TmdbEntityBase<KeywordMovie> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: KeywordMovieEntity): KeywordMovieEntity;
    list(this: any, reqmatch?: KeywordMovieListMatch, ctrl?: Control): Promise<KeywordMovieEntity[]>;
}
export { KeywordMovieEntity };
