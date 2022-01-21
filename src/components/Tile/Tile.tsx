import { forwardRef } from "react";
import { TileType } from "./Tile.types";
import { displayTime } from "../../utils/displayTime";

const Tile = forwardRef<HTMLDivElement | null>((props, ref) => {
  const {
    duration,
    email,
    firstName,
    imageUrl,
    lastName,
    likes,
    thumbnailUrl,
  } = props as TileType;

  const fullName = `${firstName} ${lastName}`;

  return (
    <div ref={ref}>
      <img src={thumbnailUrl} alt={fullName} />
      <p>{displayTime(duration)}</p>
      <p>{fullName}</p>
      <p>{`${likes} ❤️`}</p>
    </div>
  );
});

export default Tile;
