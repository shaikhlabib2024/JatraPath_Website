import Layout from "../components/layout";
import "../styles/pages/infoPages.css";
import { useEffect } from "react";
const FAQ = () => {
  useEffect(() => {
      document.title = "JatraPath | FAQ";
    }, []);
  return (
    <Layout>
      <div className="info-page">
        <div className="info-hero">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions.</p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <h2>How can I book a trip?</h2>
            <p>
              You can search destinations and follow the booking steps.
            </p>
          </div>

          <div className="info-card">
            <h2>Can I cancel my booking?</h2>
            <p>
              Yes, cancellation depends on the package policy.
            </p>
          </div>

          <div className="info-card">
            <h2>Are gift cards refundable?</h2>
            <p>
              No, gift cards are non-refundable.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;