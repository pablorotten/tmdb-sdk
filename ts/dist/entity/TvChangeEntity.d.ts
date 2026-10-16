import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvChange, TvChangeListMatch } from '../TmdbTypes';
declare class TvChangeEntity extends TmdbEntityBase<TvChange> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvChangeEntity): TvChangeEntity;
    list(this: any, reqmatch?: TvChangeListMatch, ctrl?: Control): Promise<TvChangeEntity[]>;
}
export { TvChangeEntity };
