import styled from 'styled-components';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  background-color: ${({theme}) => theme.primary};
  /* & h1 {
    color: ${({ theme }) =>theme.primary};
  } */
`;
