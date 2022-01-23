import React, { useState, useRef, useCallback, ReactElement } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { TileListContainer } from './TileList.style';
import Tile from '../Tile';
import useFetchData from '../../utils/useFetchData';

function TileList(): ReactElement {
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
    <>
      {loading && (
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" data-testid="loading-progress" />
        </Backdrop>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          😟 Ups something went wrong! <strong>Please try again 🔁</strong>
        </Alert>
      )}
      <TileListContainer role="rowgroup">
        {tiles.map((tile, idx) => {
          return (
            <Tile
              // eslint-disable-next-line react/no-array-index-key
              key={`${tile.lastName}-${idx}`}
              ref={idx === tiles.length - 1 ? lastTileCard : null}
              tile={tile}
            />
          );
        })}
      </TileListContainer>
    </>
  );
}

export default TileList;
