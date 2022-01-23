import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/actions";

export const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    e.preventDefault();
    if (contacts.some((contacts) => contacts.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Contact Name"
          required
        />
      </label>
      <label>
        {" "}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Phone Number"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
