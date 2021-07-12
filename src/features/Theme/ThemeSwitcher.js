import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTheme, changeTheme } from "./themeSlice";
import { availableThemes } from "./themes";
import Switch from "react-switch";
import styled from "styled-components/macro";
import { space } from "styled-system";

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  ${space}
  font-size : 13px;
  font-weight: 600;
`;

function ThemeSwitcher() {
  const currentTheme = useSelector(selectTheme);
  const isLightTheme = currentTheme === availableThemes.Light;
  const dispatch = useDispatch();

  function handleChange() {
    const payload = isLightTheme ? availableThemes.Dark : availableThemes.Light;
    dispatch(changeTheme(payload));
  }

  return (
    <Label>
      <Span mr="8px">Light</Span>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        checked={!isLightTheme}
        onChange={handleChange}
        onColor="#ADADC9"
      />
      <Span ml="8px">Dark</Span>
    </Label>
  );
}

export default ThemeSwitcher;
