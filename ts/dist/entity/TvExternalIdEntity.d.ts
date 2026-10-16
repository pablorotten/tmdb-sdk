import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TvExternalId, TvExternalIdLoadMatch } from '../TmdbTypes';
declare class TvExternalIdEntity extends TmdbEntityBase<TvExternalId> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvExternalIdEntity): TvExternalIdEntity;
    load(this: any, reqmatch?: TvExternalIdLoadMatch, ctrl?: Control): Promise<TvExternalIdEntity>;
}
export { TvExternalIdEntity };
