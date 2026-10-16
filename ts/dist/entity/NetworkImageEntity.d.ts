import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { NetworkImage, NetworkImageListMatch } from '../TmdbTypes';
declare class NetworkImageEntity extends TmdbEntityBase<NetworkImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: NetworkImageEntity): NetworkImageEntity;
    list(this: any, reqmatch?: NetworkImageListMatch, ctrl?: Control): Promise<NetworkImageEntity[]>;
}
export { NetworkImageEntity };
