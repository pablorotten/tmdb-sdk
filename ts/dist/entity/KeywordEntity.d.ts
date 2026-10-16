import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Keyword, KeywordLoadMatch, KeywordListMatch } from '../TmdbTypes';
declare class KeywordEntity extends TmdbEntityBase<Keyword> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: KeywordEntity): KeywordEntity;
    load(this: any, reqmatch?: KeywordLoadMatch, ctrl?: Control): Promise<KeywordEntity>;
    list(this: any, reqmatch?: KeywordListMatch, ctrl?: Control): Promise<KeywordEntity[]>;
}
export { KeywordEntity };
