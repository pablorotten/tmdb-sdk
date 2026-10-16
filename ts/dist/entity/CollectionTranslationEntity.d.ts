import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { CollectionTranslation, CollectionTranslationListMatch } from '../TmdbTypes';
declare class CollectionTranslationEntity extends TmdbEntityBase<CollectionTranslation> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: CollectionTranslationEntity): CollectionTranslationEntity;
    list(this: any, reqmatch?: CollectionTranslationListMatch, ctrl?: Control): Promise<CollectionTranslationEntity[]>;
}
export { CollectionTranslationEntity };
