import { TitleFy } from "../../Helpers/Text/text";

const filterByDate = (startDate, endDate) => {
  const isDev = process.env.NEXT_PUBLIC_IS_DEV === "true";
  if (isDev) {
    return `AND date >= ('${startDate} 00:00:00'::date) +1 AND date <= ('${endDate} 00:00:00'::date) `;
  }
  return `AND date >= ('${startDate} 00:00:00'::date) AND date <= ('${endDate} 00:00:00'::date) `;
};

const CREATE_TABLE_FUNC = (
  name,
  objOfColumnsAndOptions,
  foreign = [{ table: "", column: "" }],
  startingText
) => {
  if (typeof name !== "string") {
    throw TypeError("You must add a name for the table to be created");
  } else if (typeof objOfColumnsAndOptions === "undefined") {
    throw TypeError(`You must add an object with key value pairs,
     the keys being the column names and the values being a list of uppercase postgre arguments`);
  }
  const obj = objOfColumnsAndOptions;
  const objKeys = Object.keys(obj);
  let primary;
  let foreignKeyWord = [];
  let text = `${startingText} "${name}" (`;
  for (let key = 0; key < objKeys.length; key++) {
    const currentKey = objKeys[key];
    text += `"${currentKey}" `; // added a space
    const keyData = obj[currentKey];
    for (let k2 = 0; k2 < keyData.length; k2++) {
      const current = keyData[k2];
      const space = key === objKeys.length - 1 ? "" : " ";
      if (current.toUpperCase() == "PRIMARY KEY") {
        primary = currentKey.trim();
      } else if (current.toUpperCase() == "FOREIGN KEY") {
        foreignKeyWord.push(currentKey.trim());
        text += " ";
      } else {
        text += current.trim() + space;
      }
      if (k2 == keyData.length - 1) {
        text = text.trim();
        text += ", ";
      }
    }
  }

  let primaryKey = `PRIMARY KEY ("${primary}")`;
  text += primaryKey;
  if (foreignKeyWord.length > 0) {
    foreignKeyWord.forEach((foreigner, index) => {
      text += ", ";
      const foreignKey = `FOREIGN KEY ("${foreigner}") `;
      text +=
        foreignKey +
        `REFERENCES ${foreign[index].table}(${foreign[index].column})`;
    });
  }
  text += `);`;
  return text;
};

export const CONVERT_CONSTRUCTOR_TO_CREATE_TABLE_IF_NOT_EXISTS = (
  name,
  objOfColumnsAndOptions,
  foreign = [{ table: "", column: "" }]
) => {
  const text = CREATE_TABLE_FUNC(
    name,
    objOfColumnsAndOptions,
    foreign,
    "CREATE TABLE IF NOT EXISTS"
  );
  return text;
};

const CONVERT_CONSTRUCTOR_TO_CREATE_TABLE = (
  name,
  objOfColumnsAndOptions,
  foreign = [{ table: "", column: "" }]
) => {
  const text = CREATE_TABLE_FUNC(
    name,
    objOfColumnsAndOptions,
    foreign,
    "CREATE TABLE"
  );
  return text;
};

export default CONVERT_CONSTRUCTOR_TO_CREATE_TABLE;

export const CONVERT_WORKER_TO_ADD = (tableName, workerClassInfo) => {
  let id = "";
  id = tableName + "_id";
  let values = Object.keys(workerClassInfo);
  let text = `INSERT INTO "${tableName}" (${id}, `;
  values.forEach((value, index) => {
    const space = index === values.length - 1 ? " " : ", ";
    text += value + space;
  });
  text += `) VALUES (DEFAULT, `;
  values.forEach((value, index) => {
    const actualValue = `'${workerClassInfo[value]}'`;
    const space = index === values.length - 1 ? "" : ", ";
    text += actualValue + space;
  });
  text += `);`;
  return text;
};

export const CONVERT_USER_TO_RETREIVE = (tableName, userInfo) => {
  const password = userInfo.password;
  const email = userInfo.email;
  const firstName = userInfo.firstName;
  const job = userInfo.job;
  let text = `SELECT * FROM "${tableName}" `;
  text += `WHERE "password"='${password}' AND "email"='${email}' AND "first_name"='${firstName}' AND "job"='${job}' `;
  return text;
};

export const CONVERT_USER_INFO_UPDATE = (
  tableName,
  args,
  returning = false
) => {
  const job_id_text = `${tableName}_id`;
  const userId = args.userId;
  const updatedInfo = args.updatedInfo;
  const columnName = args.columnName;
  let text = `UPDATE ${tableName} `;
  text += `SET "${columnName}" = '${updatedInfo}' `;
  text += `WHERE "${job_id_text}" = '${userId}'`;
  if (returning) {
    text += ` RETURNING *`;
  }
  return text;
};

export const CONVERT_ADD_EARNINGS = (
  tableName,
  args,
  idString = "payment_id"
) => {
  let keys = Object.keys(args);
  let text = `INSERT INTO "${tableName}" ("${idString}", `;
  keys.forEach((value, index) => {
    const space = index === keys.length - 1 ? " " : ", ";
    text += value + space;
  });
  text += `) VALUES (DEFAULT, `;
  keys.forEach((key, index) => {
    const actualKey = `'${args[key]}'`;
    const space = index === keys.length - 1 ? "" : ", ";
    text += actualKey + space;
  });
  text += `);`;
  return text;
};

export const CONVERT_ADD_HOURLY_EARNINGS = (tableName, args, idString) => {
  return CONVERT_ADD_EARNINGS(tableName, args, idString);
};

export const CONVERT_GET_CALL_EARNINGS = (
  workerType,
  id,
  startDate,
  endDate
) => {
  const job = workerType.toLowerCase();
  const tableName = `${job}_earnings`;
  let text = `SELECT "${job}_name", "date", "payment_amount", "${job}_fee", "start_time", "location", payment_id `;
  text += `FROM ${tableName} `;
  text += `WHERE "${job}_id" = ${id} `;
  // text += `AND date >= ('${startDate} 00:00:00'::date) AND date <= ('${endDate} 00:00:00'::date) `;
  text += filterByDate(startDate, endDate);
  text += `ORDER BY "date", "start_time" ASC`;
  return text;
};

export const CONVERT_GET_HOURLY_EARNINGS = (
  workerType,
  id,
  startDate,
  endDate
) => {
  const tableName = `hourly_earnings`;
  let text = `SELECT "date", "worker_name", "start_time", "end_time", "hourly_wage", "amount_earned", "clinic_name", "total_hours", clock_in_id `;
  text += `FROM ${tableName} `;
  text += `WHERE "worker_id" = '${id}' AND "worker_job" = '${TitleFy(
    workerType
  )}' `;
  text += filterByDate(startDate, endDate);
  text += `ORDER BY "date", "start_time"`;
  return text;
};
// CONVERT_GET_CALL_EARNINGS;
export const CONVERT_GET_ALL_EARNINGS = (workerType, id) => {
  const title = TitleFy(workerType);
  const job = workerType.toLowerCase();
  let text = `SELECT "date", "start_time", "${job}_name", "${job}_fee", "location", "${job}_id", "payment_id" `;
  text += `FROM "${job}_earnings" `;
  text += `WHERE "doctor_id" = ${id} `;
  text += "UNION ALL ";
  text += `SELECT "date", "start_time", "worker_name", "amount_earned", "clinic_name", "worker_id", "clock_in_id" `;
  text += `FROM "hourly_earnings" `;
  text += `WHERE "worker_id" = ${id} AND worker_job = '${title}' `;

  text += `ORDER BY "date", "start_time"`;
  return text;
};

export const CONVERT_GET_SPECIFIC_PAYMENT_METHOD_TYPE = (
  workerType,
  id,
  paymentMethod,
  startDate,
  endDate
) => {
  const job = workerType.toLowerCase();
  let text = `SELECT "date", "start_time", "${job}_name", "${job}_fee", "location", "${job}_id", "payment_id", payment_amount `;
  text += `FROM "${job}_earnings" `;
  text += `WHERE "${job}_id" = ${id} AND "payment_method" = '${paymentMethod}' `;
  // text += `AND date >= ('${startDate} 00:00:00'::date) AND date <= ('${endDate} 00:00:00'::date) `;
  text += filterByDate(startDate, endDate);
  text += `ORDER BY "date", "start_time"`;
  return text;
};

export const CONVERT_GET_DATE_RANGE_MONTHLY_EARNINGS = (
  workerType,
  id,
  startDate,
  endDate,
  isAll
) => {
  const title = TitleFy(workerType);
  const job = workerType.toLowerCase();
  let text = `SELECT "date", "start_time", "${job}_name", "${job}_fee", "location", "${job}_id", "payment_id" `;
  text += `FROM "${job}_earnings" `;
  text += `WHERE "${job}_id" = ${id} `;
  // text += `AND date >= ('${startDate} 00:00:00'::date) AND date <= ('${endDate} 00:00:00'::date) `;
  text += filterByDate(startDate, endDate);

  if (isAll) {
    text += "UNION ALL ";
    text += `SELECT "date", "start_time", "worker_name", "amount_earned", "clinic_name", "worker_id", "clock_in_id" `;
    text += `FROM "hourly_earnings" `;
    text += `WHERE "worker_id" = ${id} AND worker_job = '${title}' `;
    text += filterByDate(startDate, endDate);
    // text += `AND date >= ('${startDate} 00:00:00'::date)+1 AND date <= ('${endDate} 00:00:00'::date) `;
  }
  text += `ORDER BY "date", "start_time"`;
  return text;
};

export const CONVERT_UPDATE_COLUMN_WITH_CONDITION = (
  tableName,
  columnName,
  prevValue,
  newValue
) => {
  let text = `UPDATE ${tableName} `;
  text += `SET "${columnName}" = '${newValue}' `;
  text += `WHERE "${columnName}" = '${prevValue}'`;
  return text;
};
