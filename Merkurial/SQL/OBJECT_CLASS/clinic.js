import ARGS from "./postgreArgs";
import { removeProperties } from "./person";

export class Clinic {
  constructor(
    name,
    city,
    district,
    sub_district,
    phone_number,
    address,
    coordinates,
    building_number,
    moo,
    this_months_earnings,
    earnings_to_date
  ) {
    this.name = name;
    this.city = city;
    this.district = district;
    this.sub_district = sub_district;
    this.phone_number = phone_number;
    this.address = address;
    this.coordinates = coordinates;
    this.building_number = building_number;
    this.moo = moo;
    this.this_months_earnings = this_months_earnings;
    this.earnings_to_date = earnings_to_date;
  }
}

export const clinicTableConstructor = (remove = null, id = false) => {
  const {
    varchar50,
    varchar100,
    varchar500,
    notNull,
    serial,
    primaryKey,
    smallInt,
    int,
    bigInt,
    unique,
  } = ARGS;

  let clinicObj = {
    clinic_id: [serial, primaryKey, notNull],
    name: [varchar50, notNull, unique],
    city: [varchar50, notNull],
    district: [varchar50, notNull],
    sub_district: [varchar50, notNull],
    phone_number: [varchar50, notNull],
    address: [varchar100, notNull],
    coordinates: [varchar500, notNull],
    building_number: [varchar50, notNull],
    moo: [smallInt],
    this_months_earnings: [int],
    earnings_to_date: [bigInt],
  };
  if (remove !== null) {
    clinicObj = removeProperties(clinicObj, remove);
  }

  if (!id) {
    delete clinicObj.clinic_id;
  }
  return clinicObj;
};
