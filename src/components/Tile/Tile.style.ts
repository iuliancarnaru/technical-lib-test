import styled from "styled-components";

interface TileProps {
  imageUrl: string;
}

export const TileContainer = styled.div`
  position: relative;
`;

export const TileImage = styled.span<TileProps>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  width: 20rem;
  height: 20rem;
  border-radius: 0.5rem;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

export const TileTime = styled.span`
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  font-size: 1.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
  z-index: 2;
`;

export const TileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
`;

export const ModalWrapper = styled.div`
  width: 80rem;
  height: 60rem;
  background-color: #fff;
  position: relative;
`

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0.5rem;
`
export const ModalImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 40rem;
  height:100%;
  background-color: #e2e2e2
`
