import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieTranslation, MovieTranslationListMatch } from '../TmdbTypes';
declare class MovieTranslationEntity extends TmdbEntityBase<MovieTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieTranslationEntity): MovieTranslationEntity;
    list(this: any, reqmatch?: MovieTranslationListMatch, ctrl?: Control): Promise<MovieTranslationEntity[]>;
}
export { MovieTranslationEntity };
