import Layout from "../components/layout";
import "../styles/pages/infoPages.css";
import { useEffect } from "react";
function Privacy() {
  useEffect(() => {
      document.title = "JatraPath | Privacy Policy";
    }, []);
  return (
    <Layout>
      <div className="info-page">
        <div className="info-hero">
          <h1>Privacy Policy</h1>

          <p>Your privacy matters to us.</p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <p>
              We collect limited user information for booking
              and service improvement purposes.
            </p>

            <p>
              Your personal information will never be sold
              to third parties.
            </p>

            <p>
              We use secure systems to protect user data.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Privacy;