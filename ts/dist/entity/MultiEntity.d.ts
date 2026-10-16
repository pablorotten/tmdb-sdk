import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Multi, MultiListMatch } from '../TmdbTypes';
declare class MultiEntity extends TmdbEntityBase<Multi> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MultiEntity): MultiEntity;
    list(this: any, reqmatch?: MultiListMatch, ctrl?: Control): Promise<MultiEntity[]>;
}
export { MultiEntity };
