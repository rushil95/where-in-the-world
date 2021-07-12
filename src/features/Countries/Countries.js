import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard/CountryCard";
import { selectAllCountries, selectFilteredCountries } from "./countriesSlice";
import styled from "styled-components/macro";

const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  column-gap: 70px;
  row-gap: 60px;
  align-items: stretch;

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    justify-content: center;
  }
`;

export default function Countries() {
  const countries = useSelector(selectFilteredCountries);
  console.log("Countries render");
  return (
    <Container>
      {countries.map((country) => {
        const { name, flag, population, region, capital } = country;
        return (
          <CountryCard
            key={name}
            name={name}
            flagUrl={flag}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </Container>
  );
}
