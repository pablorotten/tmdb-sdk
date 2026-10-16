import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonImage, PersonImageListMatch } from '../TmdbTypes';
declare class PersonImageEntity extends TmdbEntityBase<PersonImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonImageEntity): PersonImageEntity;
    list(this: any, reqmatch?: PersonImageListMatch, ctrl?: Control): Promise<PersonImageEntity[]>;
}
export { PersonImageEntity };
