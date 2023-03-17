import { useEffect, useState } from "react";
import { useParams, useNavigate, NavigateFunction } from "react-router-dom";
import { ResultsObject } from "../modules/interface";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Logo from "../assets/logo.svg";
import ItemCard from "../components/ItemCard";
import CardLoadingSkeleton from "../components/CardLoadingSkeleton";
import Footer from "../components/Footer";

const SearchResults = () => {
  const [results, setResults] = useState<ResultsObject | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { query } = useParams();
  const navigate: NavigateFunction = useNavigate();

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

        if (data && data.status === "OK") {
          setResults(data);
        }

        return setIsLoading(!isLoading);
      } catch (error: any) {
        if (error && error.message.includes("429"))
          return navigate("/request-not-found");
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
