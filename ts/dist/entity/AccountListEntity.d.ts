import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { AccountList, AccountListListMatch } from '../TmdbTypes';
declare class AccountListEntity extends TmdbEntityBase<AccountList> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: AccountListEntity): AccountListEntity;
    list(this: any, reqmatch?: AccountListListMatch, ctrl?: Control): Promise<AccountListEntity[]>;
}
export { AccountListEntity };
