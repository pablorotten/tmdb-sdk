import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeTranslation, EpisodeTranslationListMatch } from '../TmdbTypes';
declare class EpisodeTranslationEntity extends TmdbEntityBase<EpisodeTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeTranslationEntity): EpisodeTranslationEntity;
    list(this: any, reqmatch?: EpisodeTranslationListMatch, ctrl?: Control): Promise<EpisodeTranslationEntity[]>;
}
export { EpisodeTranslationEntity };
