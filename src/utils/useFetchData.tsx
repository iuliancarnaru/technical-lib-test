import { useState, useEffect } from "react";
import axios from "axios";

interface CardData {
  duration: number;
  email: string;
  firstName: string;
  imageUrl: string;
  lastName: string;
  likes: number;
  thumbnailUrl: string;
}

const useFetchData = (pageNumber: number) => {
  const [tilePerPage, _] = useState(50);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cardData, setCardData] = useState<CardData[] | []>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
        method: "GET",
        headers: {
          Authorization: `Basic ${process.env.REACT_APP_TOKEN}`,
        },
        params: { page: pageNumber, perPage: tilePerPage },
      })
      .then((res) => {
        setCardData((prevData) => {
          return [...prevData, ...res.data.rows];
        });
        setHasMore(res.data.rows.length > 0);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        console.error(err.message);
      });
  }, [pageNumber]);

  return { loading, error, cardData, hasMore };
};

export default useFetchData;
