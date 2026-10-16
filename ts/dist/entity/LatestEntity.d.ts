import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Latest, LatestListMatch } from '../TmdbTypes';
declare class LatestEntity extends TmdbEntityBase<Latest> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: LatestEntity): LatestEntity;
    list(this: any, reqmatch?: LatestListMatch, ctrl?: Control): Promise<LatestEntity[]>;
}
export { LatestEntity };
