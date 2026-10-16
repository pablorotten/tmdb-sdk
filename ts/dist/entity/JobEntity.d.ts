import { TmdbEntityBase } from '../TmdbEntityBase';
import type { TmdbSDK } from '../TmdbSDK';
import type { Control } from '../types';
import type { Job, JobListMatch } from '../TmdbTypes';
declare class JobEntity extends TmdbEntityBase<Job> {
    constructor(client: TmdbSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    list(this: any, reqmatch?: JobListMatch, ctrl?: Control): Promise<JobEntity[]>;
}
export { JobEntity };
