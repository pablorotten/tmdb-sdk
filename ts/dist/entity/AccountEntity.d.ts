import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Account, AccountLoadMatch } from '../TmdbTypes';
declare class AccountEntity extends TmdbEntityBase<Account> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: AccountEntity): AccountEntity;
    load(this: any, reqmatch?: AccountLoadMatch, ctrl?: Control): Promise<AccountEntity>;
}
export { AccountEntity };
