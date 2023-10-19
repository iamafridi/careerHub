import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
const jobs = useLoaderData();
const {id} = useParams();
const idInt = parseInt(id);
const job = jobs.find(job => job.id === idInt);
console.log(job);
    return (
        <div>
            <h2>JOB DETAILS OF : {id} </h2>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">A RAHA HUN MEIN</h2>
                    <h2>Job Details :{job.job_title}</h2>
                    <p>Company : {job.company_name}</p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">ASHE PASHER JINISH</h2>
                    <button className="btn btn-primary w-full">APPLY NOW</button>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;