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
  width: 100rem;
  height: 60rem;
  background-color: #fff;
  position: relative;
  display: flex;
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
  background-color: #e2e2e2;
`
export const ModalContent = styled.div`
  display: flex;
  flex: 0 1 60rem;
  flex-direction: column;
  padding: 6rem;
  justify-content: space-evenly;
`
export const FullName = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 2rem;
`
export const About = styled.p`
  font-size: 1.8rem;
  line-height: 1.4;
`

export const ContactDetails = styled.p`
  font-size: 1.6rem;
  color: #777;
`

export const EmailEmoji = styled.span`
  display: inline-block;
  font-size: 3rem;
  margin-right: 1rem;
`