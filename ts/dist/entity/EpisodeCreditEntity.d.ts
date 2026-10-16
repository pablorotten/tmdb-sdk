import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeCredit, EpisodeCreditListMatch } from '../TmdbTypes';
declare class EpisodeCreditEntity extends TmdbEntityBase<EpisodeCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeCreditEntity): EpisodeCreditEntity;
    list(this: any, reqmatch?: EpisodeCreditListMatch, ctrl?: Control): Promise<EpisodeCreditEntity[]>;
}
export { EpisodeCreditEntity };
