import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Language, LanguageListMatch } from '../TmdbTypes';
declare class LanguageEntity extends TmdbEntityBase<Language> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: LanguageEntity): LanguageEntity;
    list(this: any, reqmatch?: LanguageListMatch, ctrl?: Control): Promise<LanguageEntity[]>;
}
export { LanguageEntity };
