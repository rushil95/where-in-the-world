import React, { useState } from "react";
import { StyledInput, Container, SearchIcon } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { setSearchText } from "../Countries/countriesSlice";

const SearchBar = (props) => {
  const searchText = useSelector((state) => state.countries.filters.name);
  const dispatch = useDispatch();
  // const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    dispatch(setSearchText(e.target.value.toLowerCase()));
  };

  const { mt } = props;

  return (
    <Container mt={mt}>
      <SearchIcon />
      <StyledInput
        placeholder="Search for a country"
        onChange={handleChange}
        value={searchText}
      />
    </Container>
  );
};

export default SearchBar;
