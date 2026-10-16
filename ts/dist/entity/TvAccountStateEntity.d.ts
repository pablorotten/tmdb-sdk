import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvAccountState, TvAccountStateLoadMatch } from '../TmdbTypes';
declare class TvAccountStateEntity extends TmdbEntityBase<TvAccountState> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvAccountStateEntity): TvAccountStateEntity;
    load(this: any, reqmatch?: TvAccountStateLoadMatch, ctrl?: Control): Promise<TvAccountStateEntity>;
}
export { TvAccountStateEntity };
