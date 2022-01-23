import React, { forwardRef, useState } from 'react';
import { TileType } from './Tile.types';
import { displayTime } from '../../utils/displayTime';
import {
  About,
  ContactDetails,
  EmailEmoji,
  FullName,
  ModalCloseButton,
  ModalContent,
  ModalImage,
  ModalWrapper,
  TileContainer,
  TileDetails,
  TileImage,
  TileTime,
} from './Tile.style';
import Modal from '../Modal';

interface TileProps {
  tile: TileType;
}

const Tile = forwardRef<HTMLDivElement | null, TileProps>(({ tile }, ref) => {
  const {
    duration,
    email,
    firstName,
    imageUrl,
    lastName,
    likes,
    thumbnailUrl,
  } = tile;

  const [showModal, setShowModal] = useState(false);

  const fullName = `${firstName} ${lastName}`;

  const handleModalVisibility = (): void => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal ? (
        <Modal data-testid="modal">
          <ModalWrapper>
            <ModalCloseButton onClick={handleModalVisibility}>
              ❌
            </ModalCloseButton>
            <ModalImage src={imageUrl} alt={fullName} />
            <ModalContent>
              <FullName>{fullName}</FullName>
              <About>
                {fullName} was born on March 28, 1986, at Lenox Hill Hospital in
                Manhattan, New York City, to an upper middle class Catholic
                family. Both of her parents have Italian ancestry, and she also
                has more distant French-Canadian roots. Her parents are Cynthia
                Louise (née Bissett), a philanthropist and business executive,
                and Internet entrepreneur Joseph Germanotta, and she has a
                younger sister named Natali. Brought up on the Upper West Side
                of Manhattan, Gaga said in an interview that her parents came
                from lower-class families and worked hard for everything.
              </About>
              <ContactDetails>
                <EmailEmoji>📨</EmailEmoji>
                {email.toLowerCase()}
              </ContactDetails>
            </ModalContent>
          </ModalWrapper>
        </Modal>
      ) : null}
      <TileContainer
        data-testid="tile-container"
        ref={ref}
        onClick={handleModalVisibility}
      >
        {thumbnailUrl && (
          <TileImage
            imageUrl={thumbnailUrl}
            role="img"
            aria-label={`[${fullName}]`}
          />
        )}
        <TileTime>{displayTime(duration)}</TileTime>
        <TileDetails>
          <p>{fullName}</p>
          <p>{`${likes} ❤️`}</p>
        </TileDetails>
      </TileContainer>
    </>
  );
});

export default Tile;
