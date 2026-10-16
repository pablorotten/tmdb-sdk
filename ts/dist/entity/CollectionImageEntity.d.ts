import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { CollectionImage, CollectionImageListMatch } from '../TmdbTypes';
declare class CollectionImageEntity extends TmdbEntityBase<CollectionImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: CollectionImageEntity): CollectionImageEntity;
    list(this: any, reqmatch?: CollectionImageListMatch, ctrl?: Control): Promise<CollectionImageEntity[]>;
}
export { CollectionImageEntity };
