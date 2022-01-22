import { useState, useEffect } from "react";
import axios from "axios";
import { TileType } from "../components/Tile/Tile.types";

const useFetchData = (pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tiles, setTiles] = useState<TileType[] | []>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let isMounted = true;

    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
        },
        params: { page: pageNumber },
      })
      .then((res) => {
        if (isMounted) {
          setTiles((prevData) => {
            return [...prevData, ...res.data.rows];
          });
          setHasMore(res.data.rows.length > 0);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(true);
        console.error(err.message);
      });

    return () => {
      isMounted = false;
    };
  }, [pageNumber]);

  return { loading, error, tiles, hasMore };
};

export default useFetchData;
