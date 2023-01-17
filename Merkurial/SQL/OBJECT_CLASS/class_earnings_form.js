import { useEffect } from "react";
import { useState } from "react";
import css from "./class_earnings.module.css";
import INPUT_LABEL from "../../Components/UI/Basics/INPUT_LABEL/INPUT_LABEL";
import CREATE_REACT_KEY from "../../Helpers/Misc/createReactKey";
import { cleanTextForForm } from "../../Helpers/Text/text";
import { matchObjectSequenceAgainstArray } from "../../Helpers/Verifications/verify";
import Button from "../../../Merkurial/Components/UI/Buttons/Button";

export const Earnings_Class_Form = () => {
  const [earningsStates, setEarningsStates] = useState({});
  const formItems = ["workerId", "name", "startTime", "hotelName", "endTime"];
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setEarningsStates((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log("SUBMITTED...");
    matchObjectSequenceAgainstArray(earningsStates, formItems);
  };

  useEffect(() => {
    console.log(earningsStates);
  }, [earningsStates]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formItems.map((item) => {
          const cleanText = cleanTextForForm(item, true);
          return (
            <INPUT_LABEL
              required={true}
              label={{ text: cleanText }}
              input={{ text: cleanText, placeholder: cleanText, name: item }}
              onChange={handleChange}
              value={earningsStates[item]}
            />
          );
        })}
      </form>
    </div>
  );
};

export const CALL_EARNINGS_CLASS_FORM = (props) => {
  const [earningsStates, setEarningsStates] = useState({});
  const formItems = [
    "worker_id",
    "worker_name",
    "start_time",
    "hotel_Name",
    "end_time",
  ];
  // workerId, name, startTime, hotelName, endTime
  const handleChange = (updatedObj) => {
    console.log("UPDATED OBJECT: ", updatedObj);
    setEarningsStates((prev) => {
      return { ...prev, ...updatedObj };
    });
  };

  const handleSubmit = () => {
    console.log("SUBMITTED...");
    matchObjectSequenceAgainstArray(earningsStates, formItems);
  };

  useEffect(() => {
    console.log(earningsStates);
  }, [earningsStates]);
  return (
    <div className={css.formDiv}>
      <form onSubmit={handleSubmit} className={css.form}>
        {formItems.map((item, index) => {
          const cleanText = cleanTextForForm(item, "_", " ", true);
          const type = item.includes("time")
            ? "time"
            : item.includes("date")
            ? "date"
            : "text";
          const value = item.includes("_id") ? item : false;
          const hidden = value === item ? true : false;
          return (
            <INPUT_LABEL
              key={CREATE_REACT_KEY(index)}
              required={true}
              label={{ text: cleanText, className: css.form }}
              input={{
                type: type,
                text: cleanText,
                placeholder: cleanText,
                name: item,
                className: type === "time" ? css.time : css.input,
                value: value,
                hidden: hidden,
              }}
              value={value}
              handleChange={handleChange}
              className={css.inputLabel}
              readOnly={false}
            />
          );
        })}
        <Button text="Submit Work Data" />
      </form>
    </div>
  );
};
