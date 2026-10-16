import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { ValidateWithLogin, ValidateWithLoginCreateData } from '../TmdbTypes';
declare class ValidateWithLoginEntity extends TmdbEntityBase<ValidateWithLogin> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: ValidateWithLoginEntity): ValidateWithLoginEntity;
    create(this: any, reqdata?: ValidateWithLoginCreateData, ctrl?: Control): Promise<ValidateWithLoginEntity>;
}
export { ValidateWithLoginEntity };
