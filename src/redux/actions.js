import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const addContact = createAction("contacts/Add", ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction("contacts/Delete");

const filterContacts = createAction("filter/Filter");

export { addContact, deleteContact, filterContacts };
