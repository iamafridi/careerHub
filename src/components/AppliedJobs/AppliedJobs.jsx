import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplications();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            console.log(jobsApplied);

            // const jobApplied = [];
            // for(const id of storedJobIds){
            //     const job = job.find(job => job.id === id);
            //     if(job){
            //         jobsApplied.push(job)
            //     }
            // }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])


    return (
        <div>
            <h1 className="text-2xl">Jobs i have applied : {appliedJobs.length}</h1>

            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>ALL</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>REMOTE</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>ONSITE</a></li>
                </ul>
            </details>}



            <ul>

                {
                    displayJobs.map(job => <li key={job.id} >
                        <span>{job.job_title} {job.remote_or_onsite}</span>
                    </li>)
                }
            </ul>



        </div>
    );
};

export default AppliedJobs;