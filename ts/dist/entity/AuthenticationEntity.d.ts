import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Authentication, AuthenticationLoadMatch } from '../TmdbTypes';
declare class AuthenticationEntity extends TmdbEntityBase<Authentication> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: AuthenticationEntity): AuthenticationEntity;
    load(this: any, reqmatch?: AuthenticationLoadMatch, ctrl?: Control): Promise<AuthenticationEntity>;
}
export { AuthenticationEntity };
