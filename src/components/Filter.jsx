import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "../redux/actions";

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onFilter = (e) => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input
          onChange={onFilter}
          type="text"
          value={filter}
          placeholder="Type a name"
        ></input>
      </label>
    </div>
  );
};
