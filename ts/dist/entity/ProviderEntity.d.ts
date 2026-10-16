import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Provider, ProviderLoadMatch } from '../TmdbTypes';
declare class ProviderEntity extends TmdbEntityBase<Provider> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ProviderEntity): ProviderEntity;
    load(this: any, reqmatch?: ProviderLoadMatch, ctrl?: Control): Promise<ProviderEntity>;
}
export { ProviderEntity };
