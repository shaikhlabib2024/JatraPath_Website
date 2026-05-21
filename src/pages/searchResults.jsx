import { useLocation } from "react-router-dom";

import Layout from "../components/layout";

import { destinations } from "../data/destinationsData";

import DestinationCard from "../components/DestinationCard";
import { useEffect } from "react";
const SearchResults = () => {
  useEffect(() => {
    document.title = "JatraPath | Search Results";
  }, []);
  const location = useLocation();

  const query =
    new URLSearchParams(location.search).get("q");

  const filtered = destinations.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>

      <div style={{
        paddingTop: "120px",
        width: "90%",
        margin: "auto",
        minHeight: "100vh"
      }}>

        <h1 style={{ marginBottom: "40px" }}>
          Search Results for "{query}"
        </h1>

        {filtered.length > 0 ? (

          filtered.map((place) => (
            <DestinationCard
              key={place.id}
              place={place}
            />
          ))

        ) : (

          <h2>No destinations found.</h2>

        )}

      </div>

    </Layout>
  );
};

export default SearchResults;