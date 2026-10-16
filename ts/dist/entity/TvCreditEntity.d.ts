import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvCredit, TvCreditListMatch } from '../TmdbTypes';
declare class TvCreditEntity extends TmdbEntityBase<TvCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvCreditEntity): TvCreditEntity;
    list(this: any, reqmatch?: TvCreditListMatch, ctrl?: Control): Promise<TvCreditEntity[]>;
}
export { TvCreditEntity };
