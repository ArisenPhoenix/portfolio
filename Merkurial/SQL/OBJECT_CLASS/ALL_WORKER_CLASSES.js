import { Doctor, docTableConstructor } from "./doctor";
import { Nurse, nurseTableConstructor } from "./nurse";
import { Driver, driverTableConstructor } from "./driver";
import { Clinic, clinicTableConstructor } from "./clinic";

const GET_CLASS = (className) => {
  switch (className.toLowerCase()) {
    case "doctor":
      return { class: Doctor, constuctor: docTableConstructor };
    case "nurse":
      return { class: Nurse, constuctor: nurseTableConstructor };
    case "driver":
      return { class: Driver, constuctor: driverTableConstructor };
    case "clinic":
      return { class: Clinic, constuctor: clinicTableConstructor };
    default:
      return { err: "That Class Does Not Exist" };
  }
};
export default GET_CLASS;

export const createClinic = async () => {
  return clinicTableConstructor();
};

export const GET_CLASS_OPTIONS = () => {
  return ["Clinic", "Doctor", "Nurse", "Driver"];
};

export const doctor = () => {
  return [Doctor, docTableConstructor()];
};

export const nurse = () => {
  return [Nurse, nurseTableConstructor()];
};

export const driver = () => {
  return [Driver, driverTableConstructor()];
};

export const clinic = () => {
  return [Clinic, clinicTableConstructor()];
};
