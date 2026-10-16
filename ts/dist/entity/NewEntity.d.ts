import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { New, NewLoadMatch, NewCreateData } from '../TmdbTypes';
declare class NewEntity extends TmdbEntityBase<New> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: NewEntity): NewEntity;
    load(this: any, reqmatch?: NewLoadMatch, ctrl?: Control): Promise<NewEntity>;
    create(this: any, reqdata?: NewCreateData, ctrl?: Control): Promise<NewEntity>;
}
export { NewEntity };
