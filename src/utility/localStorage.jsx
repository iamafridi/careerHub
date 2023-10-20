const getStoredJobApplications = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');

    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}



const saveJobApplications = id => {

    const storedJobApplication = getStoredJobApplications();
    const exists = storedJobApplication.find(jobId => jobId === id)
if(!exists){
    storedJobApplication.push(id);
    localStorage.setItem('job-applications', JSON.stringify
    (storedJobApplication))
}
}

export {getStoredJobApplications, saveJobApplications }