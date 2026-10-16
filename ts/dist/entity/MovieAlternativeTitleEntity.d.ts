import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieAlternativeTitle, MovieAlternativeTitleListMatch } from '../TmdbTypes';
declare class MovieAlternativeTitleEntity extends TmdbEntityBase<MovieAlternativeTitle> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieAlternativeTitleEntity): MovieAlternativeTitleEntity;
    list(this: any, reqmatch?: MovieAlternativeTitleListMatch, ctrl?: Control): Promise<MovieAlternativeTitleEntity[]>;
}
export { MovieAlternativeTitleEntity };
