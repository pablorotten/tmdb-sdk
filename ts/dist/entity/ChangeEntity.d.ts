import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Change, ChangeListMatch } from '../TmdbTypes';
declare class ChangeEntity extends TmdbEntityBase<Change> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ChangeEntity): ChangeEntity;
    list(this: any, reqmatch?: ChangeListMatch, ctrl?: Control): Promise<ChangeEntity[]>;
}
export { ChangeEntity };
