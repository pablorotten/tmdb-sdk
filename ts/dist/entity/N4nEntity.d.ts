import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { N4n, N4nCreateData } from '../TmdbTypes';
declare class N4nEntity extends TmdbEntityBase<N4n> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: N4nEntity): N4nEntity;
    create(this: any, reqdata?: N4nCreateData, ctrl?: Control): Promise<N4nEntity>;
}
export { N4nEntity };
