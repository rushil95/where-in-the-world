import styled from 'styled-components/macro'
import React, { useEffect, useState } from 'react'
import { getCountryByName } from '../../../api'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  selectNamesConvertedFromCode,
  statusValues as countriesLoadingStatusValues,
} from '../countriesSlice'
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner'

const Wrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  padding-top: 50px;
  margin: 0 auto;
`

const StyledButton = styled(Link)`
  width: fit-content;
  padding: 8px 35px 8px 22px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 -3px 3px 0 rgba(0, 0, 0, 0.05),
    3px 0 3px 0 rgba(0, 0, 0, 0.05), -3px 0 3px 0 rgba(0, 0, 0, 0.05);
  background: ${({ theme }) => theme.elementBg};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  justify-content: space-between;
  padding-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SectionFlag = styled.section`
  flex-basis: 45%;

  @media (max-width: 990px) {
    flex-basis: 50%;
  }
`

const SectionInfo = styled.section`
  flex-basis: 55%;

  padding-top: 20px;
  @media (max-width: 990px) {
    flex-basis: 35%;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`

const InfoGrid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 990px) {
    & + & {
      margin-top: 30px;
    }
  }
`

const CountryName = styled.h1``

const InfoDetail = styled.p`
  font-weight: 300;
  font-size: 14px;
  margin-bottom: 4px;
  & + & {
    margin-top: 10px;
  }
`

const Title = styled.span`
  font-weight: 600;
  margin-right: 5px;
`

const SectionBorderCountries = styled.section`
  display: flex;
  margin-top: 45px;
  align-items: center;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`

const BorderCountriesTitleContainer = styled.div`
  font-weight: 600;
  margin-right: 5px;
  align-self: start;
  white-space: nowrap;
  padding-top: 15px;
`

const BorderCountriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 990px) {
    margin-top: 20px;
  }
`

const BorderCountryButton = styled(StyledButton)`
  display: inline-block;
  margin-right: 10px;
  margin-top: 8px;
`

const BackButton = ({ to }) => {
  return (
    <StyledButton to={to}>
      <IoIosArrowRoundBack style={{ fontSize: 23, marginRight: 5 }} /> Back
    </StyledButton>
  )
}

const requestStatuses = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
}

const inititalStateCountryInfo = {
  nativeName: '',
  population: '',
  region: '',
  subregion: '',
  capital: '',
  topLevelDomain: [],
  currencies: [],
  languages: [],
  borders: [],
  flag: '',
}

function CountryDetails(props) {
  const { name = 'canada' } = props
  const [countryInfo, setCountryInfo] = useState(inititalStateCountryInfo)
  const [requestStatus, setRequestStatus] = useState(requestStatuses.idle)
  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
    flag,
  } = countryInfo


  const borderCountryNames = useSelector((state) =>
    selectNamesConvertedFromCode(state, borders),
  )

  useEffect(() => {
    async function fetchData() {
      setRequestStatus(requestStatuses.loading)
      try {
        const response = await getCountryByName(name)
        setCountryInfo(response.data[0])
        setRequestStatus(requestStatuses.success)
      } catch (e) {
        setRequestStatus(requestStatuses.error)
      }
    }

    fetchData()
  }, [name])

  if (requestStatus === requestStatuses.loading) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper>
      <BackButton to="" />
      <Container>
        <SectionFlag>
          <img
            src={flag}
            style={{
              width: ' 90%',
              display: 'block',
              minHeight: 270,
              maxHeight: 300,
            }}
            alt="Flag"
          />
        </SectionFlag>
        <SectionInfo>
          <CountryName>{name}</CountryName>
          <InfoGrid>
            <Column>
              <InfoDetail>
                <Title>Native Name:</Title>
                {nativeName}
              </InfoDetail>
              <InfoDetail>
                <Title>Population:</Title>
                {population.toLocaleString()}
              </InfoDetail>
              <InfoDetail>
                <Title>Region:</Title>
                {region}
              </InfoDetail>
              <InfoDetail>
                <Title>Subregion:</Title>
                {subregion}
              </InfoDetail>
              <InfoDetail>
                <Title>Capital:</Title>
                {capital}
              </InfoDetail>
            </Column>
            <Column>
              <InfoDetail>
                <Title>Top Level Domain:</Title>
                {topLevelDomain.join(', ')}
              </InfoDetail>
              <InfoDetail>
                <Title>Currencies:</Title>
                {currencies.map((currency) => currency.name).join(', ')}
              </InfoDetail>
              <InfoDetail>
                <Title>Languages:</Title>
                {languages.map((language) => language.name).join(', ')}
              </InfoDetail>
            </Column>
          </InfoGrid>
          <SectionBorderCountries>
            <BorderCountriesTitleContainer>
              Border Countries:{' '}
            </BorderCountriesTitleContainer>
            <BorderCountriesContainer>
              {borderCountryNames.map((borderCountry) => (
                <BorderCountryButton
                  to={`/country/${borderCountry}`}
                  key={borderCountry.name}
                >
                  {borderCountry}
                </BorderCountryButton>
              ))}
            </BorderCountriesContainer>
          </SectionBorderCountries>
        </SectionInfo>
      </Container>
    </Wrapper>
  )
}

export default CountryDetails
