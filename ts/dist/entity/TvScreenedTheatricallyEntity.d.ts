import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvScreenedTheatrically, TvScreenedTheatricallyListMatch } from '../TmdbTypes';
declare class TvScreenedTheatricallyEntity extends TmdbEntityBase<TvScreenedTheatrically> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvScreenedTheatricallyEntity): TvScreenedTheatricallyEntity;
    list(this: any, reqmatch?: TvScreenedTheatricallyListMatch, ctrl?: Control): Promise<TvScreenedTheatricallyEntity[]>;
}
export { TvScreenedTheatricallyEntity };
