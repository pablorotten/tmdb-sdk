import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeAccountState, EpisodeAccountStateLoadMatch } from '../TmdbTypes';
declare class EpisodeAccountStateEntity extends TmdbEntityBase<EpisodeAccountState> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeAccountStateEntity): EpisodeAccountStateEntity;
    load(this: any, reqmatch?: EpisodeAccountStateLoadMatch, ctrl?: Control): Promise<EpisodeAccountStateEntity>;
}
export { EpisodeAccountStateEntity };
