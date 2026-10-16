import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Favorite, FavoriteCreateData } from '../TmdbTypes';
declare class FavoriteEntity extends TmdbEntityBase<Favorite> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: FavoriteEntity): FavoriteEntity;
    create(this: any, reqdata?: FavoriteCreateData, ctrl?: Control): Promise<FavoriteEntity>;
}
export { FavoriteEntity };
