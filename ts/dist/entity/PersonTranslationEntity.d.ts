import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonTranslation, PersonTranslationListMatch } from '../TmdbTypes';
declare class PersonTranslationEntity extends TmdbEntityBase<PersonTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonTranslationEntity): PersonTranslationEntity;
    list(this: any, reqmatch?: PersonTranslationListMatch, ctrl?: Control): Promise<PersonTranslationEntity[]>;
}
export { PersonTranslationEntity };
