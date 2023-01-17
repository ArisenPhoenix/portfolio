import {
  WorkingHoursCallEarnings,
  AfterHoursCallEarnings,
  HourlyEarnings,
} from "./class_earnings";

import {
  HOURLY_FORM,
  CALLS_FORM,
} from "../../../Components/Forms/WorkingForms/WorkingForms";

export const GET_ALL_EARNINGS_CLASSES = () => {
  return [HourlyEarnings, WorkingHoursCallEarnings, AfterHoursCallEarnings];
};

export const GET_EARNINGS_CLASSES_OPTIONS = () => {
  return ["Hourly Earnings", "Call Earnings"];
};

export const GET_ONE_EARNINGS_CLASS = (className) => {
  if (!className) {
    console.log("The earnings class name must be a string");
    return HourlyEarnings;
  } else {
    const text = className.toLowerCase();
    if (text.includes("after")) {
      return AfterHoursCallEarnings;
    } else if (text.includes("working")) {
      return WorkingHoursCallEarnings;
    } else if (text.includes("hourly")) {
      return HourlyEarnings;
    }
  }
};

export const GET_ONE_EARNINGS_CLASS_FORM = (className) => {
  if (!className) {
    return console.log("The form class name must be a string");
  } else {
    const text = className.toLowerCase();
    if (text.includes("call")) {
      return CALLS_FORM;
    } else if (text.includes("hourly")) {
      return HOURLY_FORM;
    }
  }
};
