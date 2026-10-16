import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Company, CompanyLoadMatch, CompanyListMatch } from '../TmdbTypes';
declare class CompanyEntity extends TmdbEntityBase<Company> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: CompanyEntity): CompanyEntity;
    load(this: any, reqmatch?: CompanyLoadMatch, ctrl?: Control): Promise<CompanyEntity>;
    list(this: any, reqmatch?: CompanyListMatch, ctrl?: Control): Promise<CompanyEntity[]>;
}
export { CompanyEntity };
