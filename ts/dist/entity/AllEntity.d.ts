import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { All, AllLoadMatch } from '../TmdbTypes';
declare class AllEntity extends TmdbEntityBase<All> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: AllEntity): AllEntity;
    load(this: any, reqmatch?: AllLoadMatch, ctrl?: Control): Promise<AllEntity>;
}
export { AllEntity };
