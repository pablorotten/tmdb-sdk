import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { NetworkAlternativeName, NetworkAlternativeNameListMatch } from '../TmdbTypes';
declare class NetworkAlternativeNameEntity extends TmdbEntityBase<NetworkAlternativeName> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: NetworkAlternativeNameEntity): NetworkAlternativeNameEntity;
    list(this: any, reqmatch?: NetworkAlternativeNameListMatch, ctrl?: Control): Promise<NetworkAlternativeNameEntity[]>;
}
export { NetworkAlternativeNameEntity };
