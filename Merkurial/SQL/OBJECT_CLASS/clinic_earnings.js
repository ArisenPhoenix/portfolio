import ARGS from "./postgreArgs";

export class ClinicEarnings {
  constructor(
    clinic_id,
    clinic_name,
    worker_type,
    worker_id,
    worker_name,
    start_time,
    end_time,
    total_made,
    total_wages
  ) {
    this.clinic_id = clinic_id;
    this.clinic_name = clinic_name;
    this.worker_type = worker_type;
    this.worker_id = worker_id;
    this.worker_name = worker_name;
    this.start_time = start_time;
    this.end_time = end_time;
    this.total_made = total_made;
    this.total_wages = total_wages;
  }
  info() {
    console.log(this);
  }
  name() {
    return this.constructor.clinic_id, this.constructor.clinic_name;
  }
}

export const ClinicEarningsTableConstructor = () => {
  const {
    primaryKey,
    serial,
    varchar50,
    varchar100,
    notNull,
    smallInt,
    foreignKey,
  } = ARGS;

  const ClinicEarningsObj = {
    payment_id: [primaryKey, serial],
    clinic_id: [smallInt, foreignKey],
    clinic_name: [varchar100, notNull],
    worker_id: [smallInt, notNull, foreignKey],
    worker_type: [varchar100, notNull],
    worker_name: [smallInt, notNull],
    start_time: [varchar50, notNull],
    end_time: [varchar50, notNull],
    total_wages: [smallInt, notNull],
    total_made: [smallInt, notNull],
  };

  return ClinicEarningsObj;
};

export default ClinicEarningsTableConstructor;

export const removeProperties = (obj, remove) => {
  if (typeof remove !== "undefined") {
    if (Array.isArray(remove)) {
      remove.forEach((item, index) => {
        obj[item] && delete obj[item];
      });
    } else {
      delete obj[remove];
    }
    delete obj[remove];
  }
  return obj;
};
