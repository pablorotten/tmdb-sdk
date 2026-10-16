import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonAccountState, SeasonAccountStateListMatch } from '../TmdbTypes';
declare class SeasonAccountStateEntity extends TmdbEntityBase<SeasonAccountState> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonAccountStateEntity): SeasonAccountStateEntity;
    list(this: any, reqmatch?: SeasonAccountStateListMatch, ctrl?: Control): Promise<SeasonAccountStateEntity[]>;
}
export { SeasonAccountStateEntity };
