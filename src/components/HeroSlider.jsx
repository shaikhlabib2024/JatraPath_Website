import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/components/heroSlider.css";

const HeroSlider = () => {

  const slides = [
    "https://i.pinimg.com/736x/16/0a/fa/160afaab71c156760807edc34ebb939c.jpg",
    "https://i.pinimg.com/736x/e4/d4/a3/e4d4a33b32d3e1b15f89f111d49b729c.jpg",
    "https://i.pinimg.com/1200x/28/e1/9e/28e19e8fe4d7f5436b2391a26bc23189.jpg",
    "https://i.pinimg.com/1200x/42/8f/60/428f60bd000b23bd9f8eb9ead49939ba.jpg",
    "https://i.pinimg.com/1200x/3d/5c/ff/3d5cff4237a01a6e0f1c20c7571e2938.jpg",
    "https://i.pinimg.com/736x/72/f2/70/72f2705fb68d2f08e1043eeeeb8e1008.jpg"
  ];

  const [current, setCurrent] = useState(0);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrent(prev =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);

  }, []);

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
    }
  };

  return (
    <div className="hero-slider">

      <div className="slider-bg">

        {slides.map((img, i) => (
          <div
            key={i}
            className={`slide-image ${i === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="overlay1">

          <h1>Discover Beautiful Bangladesh</h1>

          <p>Adventure starts here</p>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroSlider;