import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Tvn, TvnLoadMatch, TvnListMatch, TvnCreateData, TvnRemoveMatch } from '../TmdbTypes';
declare class TvnEntity extends TmdbEntityBase<Tvn> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: TvnEntity): TvnEntity;
    load(this: any, reqmatch?: TvnLoadMatch, ctrl?: Control): Promise<TvnEntity>;
    list(this: any, reqmatch?: TvnListMatch, ctrl?: Control): Promise<TvnEntity[]>;
    create(this: any, reqdata?: TvnCreateData, ctrl?: Control): Promise<TvnEntity>;
    remove(this: any, reqmatch?: TvnRemoveMatch, ctrl?: Control): Promise<TvnEntity>;
}
export { TvnEntity };
