import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonExternalId, SeasonExternalIdLoadMatch } from '../TmdbTypes';
declare class SeasonExternalIdEntity extends TmdbEntityBase<SeasonExternalId> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonExternalIdEntity): SeasonExternalIdEntity;
    load(this: any, reqmatch?: SeasonExternalIdLoadMatch, ctrl?: Control): Promise<SeasonExternalIdEntity>;
}
export { SeasonExternalIdEntity };
