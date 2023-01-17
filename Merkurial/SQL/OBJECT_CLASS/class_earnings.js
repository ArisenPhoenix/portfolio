import ARGS from "./postgreArgs";
export class Earnings {
  constructor(workerId, name, date, startTime, endTime, clinic, wages = 600) {
    this.date = date;
    this.name = name;
    this.worker_id = workerId;
    this.start_time = startTime;
    this.end_time = endTime;
    this.clinic_id = clinic;
    this.wages = wages;
  }

  convertTimeToFloat(timeToConvert) {
    const time = timeToConvert.split(":");
    const hours = Number(time[0]);
    let minutes = Number(time[1]);
    minutes = minutes / 60;
    return hours + minutes;
  }

  totalEarnings(wages) {
    const startTime = this.convertTimeToFloat(this.start_time);
    const endTime = this.convertTimeToFloat(this.end_time);
    let totalTime = endTime - startTime;
    totalTime = totalTime > 1 ? totalTime : totalTime * -1;
    this.salary = (totalTime * wages).toFixed(2);
    return this.salary;
  }
}

export class CallEarnings extends Earnings {
  constructor(
    date,
    start_time,
    end_time,
    paymentMethod,
    payment,
    location,
    roomNumber,
    diagnosis,
    doctor_name,
    doctor_id,
    nurseName,
    driverName,
    nurse_id = 1,
    driver_id = 1
  ) {
    super(date, start_time, end_time);
    delete this.clinic;
    delete this.salary;
    delete this.name;
    delete this.wages;
    delete this.worker_id;
    delete this.clinic_id;
    this.date = date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.payment_method = paymentMethod;
    this.payment_amount = payment;
    this.location = location;
    this.room_number = roomNumber;
    this.diagnosis = diagnosis;
    this.doctor_name = doctor_name;
    this.doctor_id = doctor_id;
    this.doctor_fee = 1000;
    this.nurse_name = nurseName;
    this.driver_name = driverName;
    this.nurse_id = nurse_id;
    this.driver_id = driver_id;
  }
}

export class WorkingHoursCallEarnings extends CallEarnings {
  constructor(
    date,
    startTime,
    endTime,
    paymentMethod,
    payment,
    location,
    roomNumber,
    diagnosis,
    doctor_name,
    doctor_id,
    nurseName,
    driverName,
    nurse_id = 1,
    driver_id = 1
  ) {
    super(
      date,
      startTime,
      endTime,
      paymentMethod,
      payment,
      location,
      roomNumber,
      diagnosis,
      doctor_name,
      doctor_id,
      nurseName,
      driverName,
      nurse_id,
      driver_id
    );
  }
}

export class AfterHoursCallEarnings extends CallEarnings {
  constructor(
    date,
    startTime,
    endTime,
    paymentMethod,
    payment,
    location,
    roomNumber,
    diagnosis,
    doctor_name,
    doctor_id,
    nurseName,
    driverName,
    nurse_id = 1,
    driver_id = 1
  ) {
    super(
      date,
      startTime,
      endTime,
      paymentMethod,
      payment,
      location,
      roomNumber,
      diagnosis,
      doctor_name,
      doctor_id,
      nurseName,
      driverName,
      nurse_id,
      driver_id
    );

    this.doctor_fee = 2000;
  }
}
// Doctor_Earnings_Table_Constructor
export const DOCTOR_EARNINGS_TABLE_CONSTRUCTOR = () => {
  const {
    date,
    time,
    varchar20,
    varchar50,
    varchar100,
    varchar200,
    notNull,
    serial,
    primaryKey,
    smallInt,
    foreignKey,
    numeric,
  } = ARGS;
  const obj = {
    payment_id: [serial, primaryKey],
    date: [date, notNull],
    start_time: [time, notNull],
    end_time: [time],
    payment_method: [varchar50, notNull],
    payment_amount: [numeric, notNull],
    location: [varchar100, notNull],
    room_number: [varchar20, notNull],
    diagnosis: [varchar200, notNull],
    doctor_name: [varchar200, notNull],
    doctor_id: [smallInt, foreignKey, notNull],
    doctor_fee: [numeric, notNull],
    nurse_name: [varchar100, notNull],
    driver_name: [varchar100, notNull],
    nurse_id: [serial, foreignKey],
    driver_id: [serial, foreignKey],
  };
  return obj;
};

export const HOURLY_EARNINGS_TABLE_CONSTRUCTOR = () => {
  const {
    date,
    time,
    varchar50,
    varchar100,
    notNull,
    serial,
    primaryKey,
    foreignKey,
    numeric,
  } = ARGS;
  const obj = {
    clock_in_id: [serial, primaryKey],
    date: [date, notNull],
    start_time: [time, notNull],
    end_time: [time, notNull],
    hourly_wage: [numeric, notNull],
    worker_job: [varchar50, notNull],
    worker_name: [varchar100, notNull],
    worker_id: [serial, foreignKey, notNull],
    clinic_name: [varchar100, notNull],
    clinic_id: [serial, foreignKey, notNull],
    total_hours: [numeric, notNull],
    amount_earned: [numeric],
  };
  return obj;
};

export class HourlyEarnings {
  constructor(
    date,
    start_time,
    end_time,
    hourly_wage,
    worker_job,
    worker_name,
    worker_id,
    clinic_name,
    clinic_id
  ) {
    this.date = date;
    this.start_time = start_time;
    this.end_time = end_time;
    this.hourly_wage = hourly_wage;
    this.worker_job = worker_job;
    this.worker_name = worker_name;
    this.worker_id = worker_id;
    this.clinic_name = clinic_name;
    this.clinic_id = clinic_id;
    this.total_hours = this.calcTime(this.start_time, this.end_time);
    this.amount_earned = this.totalEarnings(this.hourly_wage);
  }

  convertTimeToFloat(timeToConvert) {
    const time = timeToConvert.split(":");
    const hours = Number(time[0]);
    let minutes = Number(time[1]);
    minutes = minutes / 60;
    return hours + minutes;
  }

  converTo24HourFormat(time) {
    let thisTime = time;
    if (thisTime == 0 || thisTime == 0.0) {
      thisTime = 24;
    }
    return thisTime;
  }

  calcTime(sTime, eTime) {
    let start_time = this.convertTimeToFloat(sTime);
    start_time = this.converTo24HourFormat(start_time);
    let end_time = this.convertTimeToFloat(eTime);
    end_time = this.converTo24HourFormat(end_time);
    if (end_time < 12 && start_time < 12) {
      end_time += 24;
    } else if (end_time < 12 && start_time > 12) {
      end_time += 24;
    }

    let totalTime = end_time - start_time;
    totalTime = totalTime < 0 ? totalTime * -1 : totalTime;
    totalTime = Math.ceil(totalTime);
    return totalTime;
  }

  totalEarnings(hourly_wage) {
    let totalTime = this.total_hours;
    let amount_earned = totalTime * hourly_wage;
    amount_earned = amount_earned.toFixed(2);
    amount_earned = parseFloat(amount_earned);
    return amount_earned;
  }
}
