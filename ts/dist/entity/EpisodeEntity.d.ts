import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Episode, EpisodeLoadMatch, EpisodeListMatch, EpisodeCreateData, EpisodeRemoveMatch } from '../TmdbTypes';
declare class EpisodeEntity extends TmdbEntityBase<Episode> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeEntity): EpisodeEntity;
    load(this: any, reqmatch?: EpisodeLoadMatch, ctrl?: Control): Promise<EpisodeEntity>;
    list(this: any, reqmatch?: EpisodeListMatch, ctrl?: Control): Promise<EpisodeEntity[]>;
    create(this: any, reqdata?: EpisodeCreateData, ctrl?: Control): Promise<EpisodeEntity>;
    remove(this: any, reqmatch?: EpisodeRemoveMatch, ctrl?: Control): Promise<EpisodeEntity>;
}
export { EpisodeEntity };
