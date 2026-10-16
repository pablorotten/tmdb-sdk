import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonChange, PersonChangeListMatch } from '../TmdbTypes';
declare class PersonChangeEntity extends TmdbEntityBase<PersonChange> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonChangeEntity): PersonChangeEntity;
    list(this: any, reqmatch?: PersonChangeListMatch, ctrl?: Control): Promise<PersonChangeEntity[]>;
}
export { PersonChangeEntity };
