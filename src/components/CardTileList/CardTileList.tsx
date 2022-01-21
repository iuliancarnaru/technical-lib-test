import { useState } from "react";
import useFetchData from "../../utils/useFetchData";
import CardTile from "../CardTile";

const CardTileList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, cardData, hasMore } = useFetchData(pageNumber);

  return (
    <div>
      {cardData.map((card, idx) => (
        <CardTile key={`${card.lastName}-${idx}`} title={card.firstName} />
      ))}
    </div>
  );
};

export default CardTileList;
