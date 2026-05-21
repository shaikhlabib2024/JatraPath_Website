import Layout from "../components/layout";
import "../styles/pages/infoPages.css";
import { useEffect } from "react";
function Terms() {
  useEffect(() => {
      document.title = "JatraPath | Terms of Service";
    }, []);
  return (
    <Layout>
      <div className="info-page">
        <div className="info-hero">
          <h1>Terms of Service</h1>
          <p>Please read our terms carefully.</p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <p>
              By using JatraPath, you agree to follow all travel,
              booking, and payment policies.
            </p>

            <p>
              Users must provide accurate information during booking.
            </p>

            <p>
              JatraPath reserves the right to modify services anytime.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Terms;