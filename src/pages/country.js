import React from "react";
import CountryDetails from "../features/Countries/CountryDetails/CountryDetails";
import { useParams } from "react-router-dom";

export default function Country(props) {
  const { name } = useParams();

  return <CountryDetails name={name} />;
}
