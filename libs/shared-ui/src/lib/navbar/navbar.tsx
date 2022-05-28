import { StyledNavbar } from './navbar.style'

/* eslint-disable-next-line */
export interface NavbarProps {}

export function Navbar(props: NavbarProps) {
  return (
    <StyledNavbar>
      <h1>Welcome to Navbar!</h1>
    </StyledNavbar>
  );
}

export default Navbar;
