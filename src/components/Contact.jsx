import React from "react";
import { useSelector } from "react-redux";
import {
  useDeleteContactByIdMutation,
  useGetContactsQuery,
} from "../services/api";

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.phone.includes(filter)
  );
};
export const Contact = () => {
  const { data, error } = useGetContactsQuery();
  console.log(data, error);
  const [deleteContact] = useDeleteContactByIdMutation();
  const filter = useSelector((state) => state.filter);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : data ? (
        <>
          {getVisibleContacts(data, filter).map(({ id, name, phone }) => (
            <li key={id}>
              {name} : {phone}
              <button type="button" onClick={() => deleteContact(id)}>
                Delete
              </button>
            </li>
          ))}
        </>
      ) : null}
    </>
  );
};
