import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Network, NetworkLoadMatch } from '../TmdbTypes';
declare class NetworkEntity extends TmdbEntityBase<Network> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: NetworkEntity): NetworkEntity;
    load(this: any, reqmatch?: NetworkLoadMatch, ctrl?: Control): Promise<NetworkEntity>;
}
export { NetworkEntity };
