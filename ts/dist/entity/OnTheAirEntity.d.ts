import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { OnTheAir, OnTheAirListMatch } from '../TmdbTypes';
declare class OnTheAirEntity extends TmdbEntityBase<OnTheAir> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: OnTheAirEntity): OnTheAirEntity;
    list(this: any, reqmatch?: OnTheAirListMatch, ctrl?: Control): Promise<OnTheAirEntity[]>;
}
export { OnTheAirEntity };
