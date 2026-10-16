import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { ListItemStatus, ListItemStatusLoadMatch } from '../TmdbTypes';
declare class ListItemStatusEntity extends TmdbEntityBase<ListItemStatus> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ListItemStatusEntity): ListItemStatusEntity;
    load(this: any, reqmatch?: ListItemStatusLoadMatch, ctrl?: Control): Promise<ListItemStatusEntity>;
}
export { ListItemStatusEntity };
