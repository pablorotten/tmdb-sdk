import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { TopRated, TopRatedListMatch } from '../TmdbTypes';
declare class TopRatedEntity extends TmdbEntityBase<TopRated> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TopRatedEntity): TopRatedEntity;
    list(this: any, reqmatch?: TopRatedListMatch, ctrl?: Control): Promise<TopRatedEntity[]>;
}
export { TopRatedEntity };
