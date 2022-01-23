import { createReducer } from "@reduxjs/toolkit";
import { initialContacts } from "../utils/localStorage";
import { addContact, deleteContact, filterContacts } from "./actions";

const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => payload,
});

export { contactsReducer, filterReducer };
