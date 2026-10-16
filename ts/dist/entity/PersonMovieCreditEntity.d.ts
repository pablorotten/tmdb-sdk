import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { PersonMovieCredit, PersonMovieCreditListMatch } from '../TmdbTypes';
declare class PersonMovieCreditEntity extends TmdbEntityBase<PersonMovieCredit> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: PersonMovieCreditEntity): PersonMovieCreditEntity;
    list(this: any, reqmatch?: PersonMovieCreditListMatch, ctrl?: Control): Promise<PersonMovieCreditEntity[]>;
}
export { PersonMovieCreditEntity };
