import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { SeasonVideo, SeasonVideoListMatch } from '../TmdbTypes';
declare class SeasonVideoEntity extends TmdbEntityBase<SeasonVideo> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SeasonVideoEntity): SeasonVideoEntity;
    list(this: any, reqmatch?: SeasonVideoListMatch, ctrl?: Control): Promise<SeasonVideoEntity[]>;
}
export { SeasonVideoEntity };
