import React, { useState, createContext, useRef } from "react";
import styled from "styled-components/macro";
import { space } from "styled-system";
import { BsChevronDown } from "react-icons/bs";
import useHandleOutsideClick from "../../hooks/useHandleOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { setFilterRegion } from "../Countries/countriesSlice";

const Container = styled.div`
  position: relative;
  ${space}
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const SelectedRegion = styled.div`
  background: ${({ theme }) => theme.elementBg};
  padding: 20px 25px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 -3px 3px 0 rgba(0, 0, 0, 0.05),
    3px 0 3px 0 rgba(0, 0, 0, 0.05), -3px 0 3px 0 rgba(0, 0, 0, 0.05);
  width: 300px;
  position: relative;
  cursor: pointer;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

const Item = styled.li`
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.elementBg};
  padding: 10px 25px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background};
  }
`;

const Menu = styled.ul`
  width: 100%;
  background: ${({ theme }) => theme.elementBg};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 -3px 3px 0 rgba(0, 0, 0, 0.05),
    3px 0 3px 0 rgba(0, 0, 0, 0.05), -3px 0 3px 0 rgba(0, 0, 0, 0.05);
  // padding: 20px 25px;
  position: absolute;

  ${Item} + ${Item} {
    padding-top: 8px;
  }
`;

const StyledChevronDown = styled(BsChevronDown)`
  position: absolute;
  right: 20px;
`;

const MenuItem = ({ value, onChange, children: displayName }) => {
  const handleChange = () => {
    onChange(value, displayName);
  };
  return <Item onClick={handleChange}>{displayName}</Item>;
};

function FilterDropdown(props) {
  const { mt } = props;
  const filterRegion = useSelector((state) => state.countries.filters.region);
  const [displayName, setDisplayName] = useState("");
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  useHandleOutsideClick(containerRef, () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  });

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prevState) => !prevState);
  };

  const handleChange = (value, name) => {
    dispatch(setFilterRegion(value.toLowerCase()));
    setDisplayName(name);
    setIsMenuVisible(false);
  };

  return (
    <Container mt={mt} ref={containerRef}>
      <SelectedRegion onClick={toggleMenuVisibility}>
        {displayName ? displayName : "Filter By Region"}
        <StyledChevronDown />
      </SelectedRegion>
      {isMenuVisible ? (
        <Menu>
          <MenuItem onChange={handleChange} value="Africa">
            Africa
          </MenuItem>
          <MenuItem onChange={handleChange} value="Americas">
            Americas
          </MenuItem>
          <MenuItem onChange={handleChange} value="Asia">
            Asia
          </MenuItem>
          <MenuItem onChange={handleChange} value="Europe">
            Europe
          </MenuItem>
          <MenuItem onChange={handleChange} value="Oceania">
            Oceania
          </MenuItem>
          <MenuItem onChange={handleChange} value="Polar">
            Polar
          </MenuItem>
        </Menu>
      ) : (
        ""
      )}
    </Container>
  );
}

export default FilterDropdown;
