import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 6.4rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src='/logo.png' alt="Logo của Mitsubishi" />
    </StyledLogo>
  );
}

export default Logo;
