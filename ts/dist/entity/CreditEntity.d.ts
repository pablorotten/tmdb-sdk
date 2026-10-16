import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Credit, CreditLoadMatch } from '../TmdbTypes';
declare class CreditEntity extends TmdbEntityBase<Credit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: CreditEntity): CreditEntity;
    load(this: any, reqmatch?: CreditLoadMatch, ctrl?: Control): Promise<CreditEntity>;
}
export { CreditEntity };
