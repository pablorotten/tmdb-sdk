import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonCredit, SeasonCreditListMatch } from '../TmdbTypes';
declare class SeasonCreditEntity extends TmdbEntityBase<SeasonCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonCreditEntity): SeasonCreditEntity;
    list(this: any, reqmatch?: SeasonCreditListMatch, ctrl?: Control): Promise<SeasonCreditEntity[]>;
}
export { SeasonCreditEntity };
