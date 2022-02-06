import { createReducer } from "@reduxjs/toolkit";
import { filterContacts } from "./actions";

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

export { filterReducer };
