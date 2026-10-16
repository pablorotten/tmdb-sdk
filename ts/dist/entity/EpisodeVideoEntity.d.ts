import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeVideo, EpisodeVideoListMatch } from '../TmdbTypes';
declare class EpisodeVideoEntity extends TmdbEntityBase<EpisodeVideo> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeVideoEntity): EpisodeVideoEntity;
    list(this: any, reqmatch?: EpisodeVideoListMatch, ctrl?: Control): Promise<EpisodeVideoEntity[]>;
}
export { EpisodeVideoEntity };
