import styled from 'styled-components';

interface TileProps {
  imageUrl: string;
}

export const TileContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
  margin-right: 16px;

  @media only screen and (max-width: 480px) {
    width: 90vw;
    margin-right: 0;
  }
`;

export const TileImage = styled.span<TileProps>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-position: center;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 8px;
  width: 200px;
  height: 200px;
  background-color: #e2e2e2;
  background-size: cover;
  background-repeat: no-repeat;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TileTime = styled.span`
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 18px;
  padding: 5px;
  border-radius: 5px;
  z-index: 2;
`;

export const TileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

export const ModalWrapper = styled.div`
  width: 1000px;
  height: 600px;
  background-color: #fff;
  position: relative;
  display: flex;

  @media only screen and (max-width: 1120px) {
    flex-direction: column;
    width: 90vw;
    height: 80vh;
    overflow: scroll;
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 16px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 4px;
  background-color: #fff;
  border-radius: 50%;
`;
export const ModalImage = styled.img`
  object-fit: cover;
  object-position: center;
  width: 400px;
  height: 100%;
  background-color: #e2e2e2;

  @media only screen and (max-width: 1120px) {
    width: 100%;
    height: 200px;
  }
`;
export const ModalContent = styled.div`
  display: flex;
  flex: 0 1 600px;
  flex-direction: column;
  padding: 64px;
  justify-content: space-evenly;

  @media only screen and (max-width: 468px) {
    padding: 24px;
  }
`;
export const FullName = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
export const About = styled.p`
  font-size: 18px;
  line-height: 1.4;
`;

export const ContactDetails = styled.p`
  font-size: 16px;
  color: #777;
`;

export const EmailEmoji = styled.span`
  display: inline-block;
  font-size: 32px;
  margin-right: 10px;
`;
