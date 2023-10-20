import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplications } from "../../utility/localStorage";

const AppliedJobs = () => {
const jobs = useLoaderData();
useEffect(() =>{
    const storedJobIds = getStoredJobApplications();
    if(jobs.length >0){
        const jobsApplied = jobs.filter(job => )
    }
} ,[])


    return (
        <div>
            <h1>Jobs i have applied</h1>
        </div>
    );
};

export default AppliedJobs;