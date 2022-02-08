import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../redux/actions";

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filterPhonebook = (evt) => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name
        <br></br>
        <input
          type="text"
          value={filter}
          placeholder="Input a name"
          onChange={filterPhonebook}
        />
      </label>
    </div>
  );
};
