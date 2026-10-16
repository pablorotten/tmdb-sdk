import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PrimaryTranslation, PrimaryTranslationListMatch } from '../TmdbTypes';
declare class PrimaryTranslationEntity extends TmdbEntityBase<PrimaryTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PrimaryTranslationEntity): PrimaryTranslationEntity;
    list(this: any, reqmatch?: PrimaryTranslationListMatch, ctrl?: Control): Promise<PrimaryTranslationEntity[]>;
}
export { PrimaryTranslationEntity };
