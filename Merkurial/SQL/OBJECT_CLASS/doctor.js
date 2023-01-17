import ARGS from "./postgreArgs";
import { Person, personTableConstructor, removeProperties } from "./person";
export class Doctor extends Person {
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
}

export const docTableConstructor = (remove = null, id = false) => {
  const { notNull, foreignKey, primaryKey, serial, smallInt } = ARGS;
  let obj = personTableConstructor();
  delete obj.id;
  obj = {
    doctor_id: [serial, primaryKey],
    ...obj,
    clinic_id: [smallInt, foreignKey, notNull],
  };
  if (remove !== null) {
    obj = removeProperties(obj, remove);
  }

  if (!id) {
    delete obj.doctor_id;
  }

  return obj;
};
