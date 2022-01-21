import { forwardRef, useState } from "react";
import { TileType } from "./Tile.types";
import { displayTime } from "../../utils/displayTime";
import {
  ModalCloseButton,
  ModalImage,
  ModalWrapper,
  TileContainer,
  TileDetails,
  TileImage,
  TileTime,
} from "./Tile.style";
import Modal from "../Modal";

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

  const handleModalVisibility = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      {showModal ? (
        <Modal>
          <ModalWrapper>
            <ModalCloseButton onClick={handleModalVisibility}>
              ❌
            </ModalCloseButton>

            <ModalImage src={imageUrl} />
          </ModalWrapper>
        </Modal>
      ) : null}
      <TileContainer ref={ref} onClick={handleModalVisibility}>
        <TileImage
          imageUrl={thumbnailUrl}
          role="img"
          aria-label={`[${fullName}]`}
        />
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
