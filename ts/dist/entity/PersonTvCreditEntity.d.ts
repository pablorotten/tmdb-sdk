import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonTvCredit, PersonTvCreditListMatch } from '../TmdbTypes';
declare class PersonTvCreditEntity extends TmdbEntityBase<PersonTvCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonTvCreditEntity): PersonTvCreditEntity;
    list(this: any, reqmatch?: PersonTvCreditListMatch, ctrl?: Control): Promise<PersonTvCreditEntity[]>;
}
export { PersonTvCreditEntity };
