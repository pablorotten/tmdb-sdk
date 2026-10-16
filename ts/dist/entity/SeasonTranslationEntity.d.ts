import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonTranslation, SeasonTranslationListMatch } from '../TmdbTypes';
declare class SeasonTranslationEntity extends TmdbEntityBase<SeasonTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonTranslationEntity): SeasonTranslationEntity;
    list(this: any, reqmatch?: SeasonTranslationListMatch, ctrl?: Control): Promise<SeasonTranslationEntity[]>;
}
export { SeasonTranslationEntity };
