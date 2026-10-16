import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeGroup, EpisodeGroupLoadMatch } from '../TmdbTypes';
declare class EpisodeGroupEntity extends TmdbEntityBase<EpisodeGroup> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeGroupEntity): EpisodeGroupEntity;
    load(this: any, reqmatch?: EpisodeGroupLoadMatch, ctrl?: Control): Promise<EpisodeGroupEntity>;
}
export { EpisodeGroupEntity };
