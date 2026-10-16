import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { NowPlaying, NowPlayingListMatch } from '../TmdbTypes';
declare class NowPlayingEntity extends TmdbEntityBase<NowPlaying> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: NowPlayingEntity): NowPlayingEntity;
    list(this: any, reqmatch?: NowPlayingListMatch, ctrl?: Control): Promise<NowPlayingEntity[]>;
}
export { NowPlayingEntity };
