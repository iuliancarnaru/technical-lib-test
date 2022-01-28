import styled, { css } from 'styled-components';

interface HeaderContainerProps {
  isSticky: boolean;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 24px;
  display: flex;
  align-items: center;

  ${({ isSticky }) =>
    isSticky &&
    css`
      overflow: hidden;
      position: fixed;
      top: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.97);
      z-index: 3;
    `}
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  padding: 24px 0;
  margin: 0 24px;
`;
