/* eslint-disable max-len */
import styled from 'styled-components';

export const LibrarySection = styled.section``;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: 1px solid grey;
  border-radius: 5px;

  ::placeholder {
    font-size: 14px;
    font-family: 'Lato', sans-serif;
  }
`;

export const InputContainer = styled.span`
  position: relative;
  &::after {
    content: '🔍';
    display: inline-block;
    position: absolute;
    top: 19px;
    right: 20px;
    font-size: 18px;
  }
`;
