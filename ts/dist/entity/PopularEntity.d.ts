import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Popular, PopularListMatch } from '../TmdbTypes';
declare class PopularEntity extends TmdbEntityBase<Popular> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PopularEntity): PopularEntity;
    list(this: any, reqmatch?: PopularListMatch, ctrl?: Control): Promise<PopularEntity[]>;
}
export { PopularEntity };
