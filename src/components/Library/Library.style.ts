/* eslint-disable max-len */
import styled from 'styled-components';

export const LibrarySection = styled.section``;

export const Input = styled.input`
  font-size: 14.5px;
  padding: 10px;
  margin: 10px;
  border: 1px solid grey;
  /* border-radius: 5px; */

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
    top: 14px;
    right: 20px;
    font-size: 20px;

    @media only screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
`;
