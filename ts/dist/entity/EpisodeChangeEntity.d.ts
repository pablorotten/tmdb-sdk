import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeChange, EpisodeChangeListMatch } from '../TmdbTypes';
declare class EpisodeChangeEntity extends TmdbEntityBase<EpisodeChange> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeChangeEntity): EpisodeChangeEntity;
    list(this: any, reqmatch?: EpisodeChangeListMatch, ctrl?: Control): Promise<EpisodeChangeEntity[]>;
}
export { EpisodeChangeEntity };
