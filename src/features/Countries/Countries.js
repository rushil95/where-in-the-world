import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard/CountryCard";
import {
  selectCountriesLoadingStatus,
  selectFilteredCountries,
} from "./countriesSlice";
import styled from "styled-components/macro";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
  const requestStatus = useSelector(selectCountriesLoadingStatus);

  if (requestStatus === "loading") {
    return <LoadingSpinner />;
  }
  return (
    <Container>
      {countries.map((country) => {
        const { name, flags, population, region, capital } = country;
        console.log(capital);
        return (
          <CountryCard
            key={name.common}
            name={name.common}
            flagUrl={flags.svg}
            population={population}
            region={region}
            capital={capital && capital[0]}
          />
        );
      })}
    </Container>
  );
}
