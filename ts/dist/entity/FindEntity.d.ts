import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Find, FindLoadMatch } from '../TmdbTypes';
declare class FindEntity extends TmdbEntityBase<Find> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: FindEntity): FindEntity;
    load(this: any, reqmatch?: FindLoadMatch, ctrl?: Control): Promise<FindEntity>;
}
export { FindEntity };
