import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { List, ListLoadMatch, ListListMatch, ListCreateData, ListRemoveMatch } from '../TmdbTypes';
declare class ListEntity extends TmdbEntityBase<List> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ListEntity): ListEntity;
    load(this: any, reqmatch?: ListLoadMatch, ctrl?: Control): Promise<ListEntity>;
    list(this: any, reqmatch?: ListListMatch, ctrl?: Control): Promise<ListEntity[]>;
    create(this: any, reqdata?: ListCreateData, ctrl?: Control): Promise<ListEntity>;
    remove(this: any, reqmatch?: ListRemoveMatch, ctrl?: Control): Promise<ListEntity>;
}
export { ListEntity };
