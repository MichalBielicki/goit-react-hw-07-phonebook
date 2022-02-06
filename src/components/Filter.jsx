import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
        Find contacts by name =&gt;
        <input
          onChange={onFilter}
          type="text"
          value={filter}
          placeholder="Filter Contacts"
        ></input>
      </label>
    </div>
  );
};
