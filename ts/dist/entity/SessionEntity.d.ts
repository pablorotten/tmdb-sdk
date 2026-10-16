import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Session, SessionRemoveMatch } from '../TmdbTypes';
declare class SessionEntity extends TmdbEntityBase<Session> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: SessionEntity): SessionEntity;
    remove(this: any, reqmatch?: SessionRemoveMatch, ctrl?: Control): Promise<SessionEntity>;
}
export { SessionEntity };
