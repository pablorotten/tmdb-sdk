import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { EpisodeImage, EpisodeImageListMatch } from '../TmdbTypes';
declare class EpisodeImageEntity extends TmdbEntityBase<EpisodeImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: EpisodeImageEntity): EpisodeImageEntity;
    list(this: any, reqmatch?: EpisodeImageListMatch, ctrl?: Control): Promise<EpisodeImageEntity[]>;
}
export { EpisodeImageEntity };
