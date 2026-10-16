import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { MovieCredit, MovieCreditListMatch } from '../TmdbTypes';
declare class MovieCreditEntity extends TmdbEntityBase<MovieCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: MovieCreditEntity): MovieCreditEntity;
    list(this: any, reqmatch?: MovieCreditListMatch, ctrl?: Control): Promise<MovieCreditEntity[]>;
}
export { MovieCreditEntity };
