import React from "react";
import { Container, Logo, Address, PickUpContent } from "./style";
import LogoImg from "../../assets/icons/logo.jpg";
const Navbar = () => {
  return (
    <Container>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo src={LogoImg} />
        <Address>Phase 1,Sushant Lok</Address>
      </div>
      <PickUpContent>
        <p>Pickup at Today 10:30am</p>
      </PickUpContent>
    </Container>
  );
};
export default Navbar;
