import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { CompanyAlternativeName, CompanyAlternativeNameListMatch } from '../TmdbTypes';
declare class CompanyAlternativeNameEntity extends TmdbEntityBase<CompanyAlternativeName> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: CompanyAlternativeNameEntity): CompanyAlternativeNameEntity;
    list(this: any, reqmatch?: CompanyAlternativeNameListMatch, ctrl?: Control): Promise<CompanyAlternativeNameEntity[]>;
}
export { CompanyAlternativeNameEntity };
