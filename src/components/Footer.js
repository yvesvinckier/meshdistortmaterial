import React from "react";
import styled from "styled-components";

const StyledCredit = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  z-index: 20;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  line-height: 2;

  a {
    color: #000;
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const Footer = () => {
  return (
    <StyledCredit>
      <small>
        Images from Unsplash by
        <a
          href="https://unsplash.com/photos/QTe6DLqgI7o"
          target="_Blank"
          rel="noreferrer"
        >
          Engin Akyurt
        </a>
      </small>
    </StyledCredit>
  );
};

export default Footer;
