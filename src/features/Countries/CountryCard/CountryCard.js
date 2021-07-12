import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 300px;
  display: inline-block;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05), 0 -3px 6px 0 rgba(0, 0, 0, 0.05),
    3px 0 3px 0 rgba(0, 0, 0, 0.05), -3px 0 3px 0 rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.elementBg};
  cursor: pointer;
  margin: auto;

  &:hover {
    box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.1),
      0 -3px 6px 2px rgba(0, 0, 0, 0.1), 3px 0 3px 2px rgba(0, 0, 0, 0.1),
      -3px 0 3px 2px rgba(0, 0, 0, 0.1);
  }
`;

const ImageSection = styled.div`
  border-radius: 4px;
`;

const InfoSection = styled.div`
  padding: 25px 20px;
  background: ${({ theme }) => theme.elementBg};
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const CountryName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const CountryFlagImg = styled.img`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  display: block;
  height: 200px;
  object-fit: cover;
`;

const InfoDetail = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Title = styled.span`
  font-weight: 600;
`;

function CountryCard(props) {
  const { flagUrl, name, population, region, capital } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}

      
    >
      <Container>
        <Link to={`country/${name}`} style={{}}>
          <ImageSection>
            <CountryFlagImg src={flagUrl} />
          </ImageSection>
          <InfoSection>
            <CountryName>{name}</CountryName>
            <InfoDetail>
              <Title>Population : </Title> {population.toLocaleString()}
            </InfoDetail>
            <InfoDetail>
              <Title>Region : </Title> {region}
            </InfoDetail>
            <InfoDetail>
              <Title>Capital : </Title> {capital}
            </InfoDetail>
          </InfoSection>
        </Link>
      </Container>
    </div>
  );
}

export default CountryCard;
