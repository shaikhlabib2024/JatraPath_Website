import Layout from "../components/layout";
import "../styles/pages/infoPages.css";
import { useEffect } from "react";
function Blog() {
  useEffect(() => {
      document.title = "JatraPath | Blog";
    }, []);
  return (
    <Layout>
      <div className="info-page">
        <div className="info-hero">
          <h1>Travel Blog</h1>

          <p>
            Explore travel stories, guides, and destination tips.
          </p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <h2>Top 10 Places To Visit In Bangladesh</h2>

            <p>
              Discover breathtaking mountains, beaches,
              forests, and cultural landmarks across Bangladesh.
            </p>
          </div>

          <div className="info-card">
            <h2>Travel Tips For First-Time Travelers</h2>

            <p>
              Essential travel advice to make your journey safer
              and more enjoyable.
            </p>
          </div>

          <div className="info-card">
            <h2>Best Time To Visit Sajek Valley</h2>

            <p>
              Learn when to visit Sajek for the best weather,
              scenery, and experience.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;