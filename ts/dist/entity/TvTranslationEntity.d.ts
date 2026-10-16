import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvTranslation, TvTranslationListMatch } from '../TmdbTypes';
declare class TvTranslationEntity extends TmdbEntityBase<TvTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvTranslationEntity): TvTranslationEntity;
    list(this: any, reqmatch?: TvTranslationListMatch, ctrl?: Control): Promise<TvTranslationEntity[]>;
}
export { TvTranslationEntity };
