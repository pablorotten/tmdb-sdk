import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Watchlist, WatchlistCreateData } from '../TmdbTypes';
declare class WatchlistEntity extends TmdbEntityBase<Watchlist> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: WatchlistEntity): WatchlistEntity;
    create(this: any, reqdata?: WatchlistCreateData, ctrl?: Control): Promise<WatchlistEntity>;
}
export { WatchlistEntity };
