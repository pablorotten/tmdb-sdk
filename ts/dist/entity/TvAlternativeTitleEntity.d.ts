import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvAlternativeTitle, TvAlternativeTitleListMatch } from '../TmdbTypes';
declare class TvAlternativeTitleEntity extends TmdbEntityBase<TvAlternativeTitle> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvAlternativeTitleEntity): TvAlternativeTitleEntity;
    list(this: any, reqmatch?: TvAlternativeTitleListMatch, ctrl?: Control): Promise<TvAlternativeTitleEntity[]>;
}
export { TvAlternativeTitleEntity };
