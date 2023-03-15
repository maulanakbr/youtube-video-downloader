import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ResultsObject } from "../modules/interface";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import Footer from "../components/Footer";
import CardLoadingSkeleton from "../components/CardLoadingSkeleton";
import { Helmet } from "react-helmet-async";
import Logo from "../assets/logo.svg";

const SearchResults = () => {
  const [results, setResults] = useState<ResultsObject | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { query } = useParams();

  useEffect(() => {
    const handleResponse = async () => {
      const options = {
        method: "GET",
        url: import.meta.env.VITE_RAPID_API_URL,
        params: {
          id: query,
        },

        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPID_API_HOST,
        },
      };

      try {
        const { data } = await axios.request(options);

        if (data.length !== 0 && data.status === "OK") {
          setResults(data);
        }

        setIsLoading(!isLoading);
      } catch (error) {
        console.log(error);
      }
    };

    handleResponse();
  }, []);

  return (
    <section className="results">
      <Helmet>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href={Logo} />
        <title>Results | Simple Youtube Video Downloader</title>
      </Helmet>
      <div className="results-content">
        {isLoading ? (
          <CardLoadingSkeleton />
        ) : (
          <>
            <ItemCard item={results!} />
            <Footer />
          </>
        )}
      </div>
    </section>
  );
};

export default SearchResults;
