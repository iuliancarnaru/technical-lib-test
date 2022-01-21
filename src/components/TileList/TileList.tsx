import { useState, useRef, useCallback, ReactNode } from "react";
import useFetchData from "../../utils/useFetchData";
import Tile from "../Tile";

const TileList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, tiles, hasMore } = useFetchData(pageNumber);

  // implementing infinite scroll
  const observer = useRef<IntersectionObserver>();
  const lastTileCard = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div>
      {loading && <div>Loading</div>}
      {error && <div>Ups something went wrong, please try again</div>}
      {tiles.map((tileDetails, idx) => {
        if (tiles.length === idx + 1) {
          return <Tile ref={lastTileCard} {...tileDetails} />;
        } else {
          return <Tile ref={null} {...tileDetails} />;
        }
      })}
    </div>
  );
};

export default TileList;
