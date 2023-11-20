import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const ButtonText = styled.span`
  margin-right: 8px;
`;

const AzureButton = ({ url, text }) => (
  <StyledButton href={url} target="_blank" rel="noopener noreferrer">
    <ButtonText>{text}</ButtonText>
    <FontAwesomeIcon icon={faExternalLinkAlt} />
  </StyledButton>
);

export default AzureButton;