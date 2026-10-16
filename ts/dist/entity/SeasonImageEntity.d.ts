import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonImage, SeasonImageListMatch } from '../TmdbTypes';
declare class SeasonImageEntity extends TmdbEntityBase<SeasonImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonImageEntity): SeasonImageEntity;
    list(this: any, reqmatch?: SeasonImageListMatch, ctrl?: Control): Promise<SeasonImageEntity[]>;
}
export { SeasonImageEntity };
