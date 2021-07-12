import styled from "styled-components/macro";
import { BiSearch } from "react-icons/bi";
import { space } from "styled-system";

export const Container = styled.div`
  ${space}
  position: relative;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05), 0 -3px 3px 0 rgba(0, 0, 0, 0.05),
    3px 0 3px 0 rgba(0, 0, 0, 0.05), -3px 0 3px 0 rgba(0, 0, 0, 0.05);
  width: 300px;
  border-radius: 8px;
  

  @media(max-width:450px){
    width : 100%;
    align-self:auto;
  }
`;

export const StyledInput = styled.input`
  padding: 20px 20px 20px 60px;
  border: none;
  border-radius: 8px;
  width: 100%;
  background: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  outline: none;
`;

export const SearchIcon = styled(BiSearch)`
  position: absolute;
  top: 18px;
  left: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.text};
`;
