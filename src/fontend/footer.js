import React, { useState } from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

// Styled Components
const FooterContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  text-align: center;
`;

const TeamName = styled.h2`
  margin-bottom: 10px;
  color: #333;
`;

const GitHubLink = styled.a`
  text-decoration: none;
  color: #007bff;
  margin-right: 10px;
`;

const HamburgerIcon = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const MemberNames = styled.div`
  display: ${(props) => (props.showNames ? "block" : "none")};
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MemberContact = styled.div`
  margin: 0 20px;
  text-align: left;
`;

// React Component
const Footer = () => {
  const [showNames, setShowNames] = useState(false);

  const toggleNames = () => {
    setShowNames(!showNames);
  };

  return (
    <FooterContainer>
      <TeamName>Tech_geeks Team</TeamName>
      <GitHubLink>
        <FaGithub size={30} />
      </GitHubLink>
      <HamburgerIcon onClick={toggleNames}>☰</HamburgerIcon>
      <MemberNames showNames={showNames}>
        <div>Member Name 1</div>
        <div>Member Name 2</div>
        <div>Member Name 3</div>
      </MemberNames>
      <ContactInfo>
        <MemberContact>
          <strong>Member Name 1</strong>
          <br />
          Email: member1@example.com
          <br />
          Phone: +1234567890
        </MemberContact>
        <MemberContact>
          <strong>Member Name 2</strong>
          <br />
          Email: member2@example.com
          <br />
          Phone: +2345678901
        </MemberContact>
        <MemberContact>
          <strong>Member Name 3</strong>
          <br />
          Email: member3@example.com
          <br />
          Phone: +3456789012
        </MemberContact>
      </ContactInfo>
    </FooterContainer>
  );
};

export default Footer;
