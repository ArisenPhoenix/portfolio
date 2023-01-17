import ARGS from "./postgreArgs";
import { Person } from "./person";

export class Nurse extends Person {
  constructor(
    first_name,
    last_name,
    sex,
    age,
    email,
    password,
    specialty,
    phone_number,
    line,
    home_coordinates,
    address,
    house_num,
    moo,
    city,
    district,
    sub_district,
    hourly_wage,
    hours_this_month,
    hours_worked,
    working_hour_calls,
    extra_calls,
    hired_date,
    cert_id
  ) {
    super(
      first_name,
      last_name,
      age,
      sex,
      email,
      password,
      specialty,
      phone_number,
      line,
      home_coordinates,
      address,
      house_num,
      moo,
      city,
      district,
      sub_district,
      hourly_wage,
      hours_this_month,
      hours_worked,
      working_hour_calls,
      extra_calls,
      hired_date,
      cert_id
    );
    this.cert_id = cert_id;
  }
  info() {
    console.log(this);
  }
}

export const nurseTableConstructor = () => {
  const {
    varchar1,
    varchar50,
    varchar100,
    varchar200,
    varchar500,
    notNull,
    serial,
    primaryKey,
    smallInt,
    int,
  } = ARGS;
  const nurseObj = {
    patient_id: [serial, primaryKey, notNull],
    first_name: [varchar100, notNull],
    last_name: [varchar100, notNull],
    age: [smallInt, notNull],
    sex: [varchar1, notNull],
    email: [varchar100],
    password: [varchar200],
    phone: [varchar50, notNull],
    line: [varchar100],
    home_coordinates: [varchar500, notNull],
    house_num: [varchar50, notNull],
    moo: [smallInt],
    city: [varchar50, notNull],
    district: [varchar50, notNull],
    sub_district: [varchar50, notNull],
    payments_this_month: [int],
    calls_this_month: [smallInt],
    total_calls: [int],
    total_payments: [int],
    dates_called: [varchar50, notNull],
  };
  return nurseObj;
};
