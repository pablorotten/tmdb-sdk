import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonTaggedImage, PersonTaggedImageListMatch } from '../TmdbTypes';
declare class PersonTaggedImageEntity extends TmdbEntityBase<PersonTaggedImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonTaggedImageEntity): PersonTaggedImageEntity;
    list(this: any, reqmatch?: PersonTaggedImageListMatch, ctrl?: Control): Promise<PersonTaggedImageEntity[]>;
}
export { PersonTaggedImageEntity };
