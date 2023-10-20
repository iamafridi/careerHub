import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";

const AppliedJobs = () => {
const jobs = useLoaderData();

const [appliedJobs, setAppliedJobs] = useState([]);


useEffect(() =>{
    const storedJobIds = getStoredJobApplications();
    if(jobs.length >0){
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
    }
} ,[] )


    return (
        <div>
            <h1 className="text-2xl">Jobs i have applied : {appliedJobs.length}</h1>
          
            <details className="dropdown mb-32">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>ALL</a></li>
    <li><a>REMOTE</a></li>
    <li><a>ONSITE</a></li>
  </ul>
</details>}



        <ul>

            {
                appliedJobs.map(job => <li key={job.id} >
                    <span>{job.job_title} {job.remote_or_onsite}</span>
                </li>)
            }
        </ul>
        
        
        
        </div>
    );
};

export default AppliedJobs;