import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const { data } = await yelp.get("/search", {
        params: { limit: 50, term: searchTerm, location: "san jose" },
      });
      setResults(data.businesses);
    } catch (e) {
      setErrorMessage(e);
    }
  };

  useEffect(() => {
    searchApi("beef");
  }, []);

  return [searchApi, results, errorMessage];
};
