import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonExternalId, PersonExternalIdLoadMatch } from '../TmdbTypes';
declare class PersonExternalIdEntity extends TmdbEntityBase<PersonExternalId> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonExternalIdEntity): PersonExternalIdEntity;
    load(this: any, reqmatch?: PersonExternalIdLoadMatch, ctrl?: Control): Promise<PersonExternalIdEntity>;
}
export { PersonExternalIdEntity };
