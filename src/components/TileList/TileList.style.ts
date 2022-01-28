import styled, { css } from 'styled-components';

interface TileListContainerProps {
  isSticky: boolean;
}

export const TileListContainer = styled.div<TileListContainerProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 24px;

  ${({ isSticky }) =>
    isSticky &&
    css`
      margin-top: 110px;
    `}
`;
