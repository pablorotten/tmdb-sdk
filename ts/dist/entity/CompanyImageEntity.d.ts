import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { CompanyImage, CompanyImageListMatch } from '../TmdbTypes';
declare class CompanyImageEntity extends TmdbEntityBase<CompanyImage> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: CompanyImageEntity): CompanyImageEntity;
    list(this: any, reqmatch?: CompanyImageListMatch, ctrl?: Control): Promise<CompanyImageEntity[]>;
}
export { CompanyImageEntity };
