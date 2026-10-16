import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeExternalId, EpisodeExternalIdLoadMatch } from '../TmdbTypes';
declare class EpisodeExternalIdEntity extends TmdbEntityBase<EpisodeExternalId> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeExternalIdEntity): EpisodeExternalIdEntity;
    load(this: any, reqmatch?: EpisodeExternalIdLoadMatch, ctrl?: Control): Promise<EpisodeExternalIdEntity>;
}
export { EpisodeExternalIdEntity };
