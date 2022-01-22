import { useState, useRef, useCallback } from "react";
import useFetchData from "../../utils/useFetchData";
import Tile from "../Tile";
import { TileListContainer } from "./TileList.style";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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

  if (error) throw new Error("Fetch data error...");

  return (
    <>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" data-testid="loading-progress" />
        </Backdrop>
      )}
      <TileListContainer role="rowgroup">
        {tiles.map((tile, idx) => {
          return (
            <Tile
              key={`${tile.lastName}-${idx}`}
              ref={idx === tiles.length - 1 ? lastTileCard : null}
              tile={tile}
            />
          );
        })}
      </TileListContainer>
    </>
  );
};

export default TileList;
