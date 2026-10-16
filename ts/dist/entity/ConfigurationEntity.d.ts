import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Configuration, ConfigurationListMatch } from '../TmdbTypes';
declare class ConfigurationEntity extends TmdbEntityBase<Configuration> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ConfigurationEntity): ConfigurationEntity;
    list(this: any, reqmatch?: ConfigurationListMatch, ctrl?: Control): Promise<ConfigurationEntity[]>;
}
export { ConfigurationEntity };
