import { Person, personTableConstructor, removeProperties } from "./person";
import ARGS from "./postgreArgs";

export class Nurse extends Person {
  constructor(
    first_name,
    last_name,
    job,
    age,
    sex,
    email,
    password,
    specialty,
    phone_number,
    line,
    home_coordinates,
    building_number,
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
    credentials,
    clinic_id
  ) {
    super(
      first_name,
      last_name,
      job,
      age,
      sex,
      email,
      password,
      specialty,
      phone_number,
      line,
      home_coordinates,
      building_number,
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
      credentials,
      clinic_id
    );
  }
  info() {
    console.log(this);
  }
}

export const nurseTableConstructor = (remove = null, id = false) => {
  const {
    varchar50,
    unique,
    notNull,
    foreignKey,
    primaryKey,
    serial,
    smallInt,
  } = ARGS;
  let obj = personTableConstructor();
  delete obj.id;
  obj = {
    nurse_id: [serial, primaryKey],
    ...obj,
    clinic_id: [smallInt, foreignKey, notNull],
  };
  if (remove !== null) {
    obj = removeProperties(obj, remove);
  }

  if (!id) {
    delete obj.nurse_id;
  }

  return obj;
};
