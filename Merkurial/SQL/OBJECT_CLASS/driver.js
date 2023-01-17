import ARGS from "./postgreArgs";
import { Person, personTableConstructor, removeProperties } from "./person";

export class Driver extends Person {
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
    license_plate,
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
    this.license_plate = license_plate;
  }
}

export const driverTableConstructor = (remove = null, id = false) => {
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
  delete obj.clinic_id;
  delete obj.id;
  obj = {
    driver_id: [serial, primaryKey],
    ...obj,
    license_plate: [varchar50, unique],
    clinic_id: [smallInt, foreignKey, notNull],
  };

  delete obj.id;
  if (remove) {
    obj = removeProperties(obj, remove);
  }

  if (!id) {
    delete obj.driver_id;
  }

  return obj;
};
