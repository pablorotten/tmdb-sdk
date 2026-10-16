import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonCombinedCredit, PersonCombinedCreditListMatch } from '../TmdbTypes';
declare class PersonCombinedCreditEntity extends TmdbEntityBase<PersonCombinedCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonCombinedCreditEntity): PersonCombinedCreditEntity;
    list(this: any, reqmatch?: PersonCombinedCreditListMatch, ctrl?: Control): Promise<PersonCombinedCreditEntity[]>;
}
export { PersonCombinedCreditEntity };
