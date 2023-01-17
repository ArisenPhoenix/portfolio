import { createSlice } from "@reduxjs/toolkit";

// const initialState = ProjectSlicePrep();
const initialState = {
  "First Name": "Brandon",
  "Last Name": "Marcure",
  Title: "Software Engineer",
  "US Phone": "1 (815) - 656 - 5180",
  "TH Phone": "66 (091) - 741 - 3777",
  Email: "brandon@merkurialphoenix.com",
  Availability: "01:00 - 15:00 UTC",
};

const ContactSlice = createSlice({
  name: "PROJECT",
  initialState: initialState,
  reducers: {
    inBoxMessage: () => {
      const sendMessage = async (message) => {
        const response = await fetch(api, params);
        return response;
      };
      return sendMessage;
    },
  },
});

export default ContactSlice;
