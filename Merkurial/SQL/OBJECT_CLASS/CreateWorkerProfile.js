import ADD_WORKER from "../QUERIES/Row/ADD_WORKER";

const CREATE_WORKER_PROFILE = async (workerClass) => {
  const tableName = workerClass.job.toLowerCase();
  const response = ADD_WORKER(tableName, workerClass);
  return response;
};

export default CREATE_WORKER_PROFILE;
