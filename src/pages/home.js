import React from "react";
import styled from "styled-components/macro";
import Countries from "../features/Countries/Countries";
import FilterDropdown from "../features/FilterDropdown/FilterDropdown";
import SearchBar from "../features/SearchBar/SearchBar";

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const FiltersSection = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 670px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home(props) {
  return (
    <Container>
      <FiltersSection>
        <SearchBar mt="30px" />
        <FilterDropdown mt="30px" />
      </FiltersSection>
      <Countries />
    </Container>
  );
}
