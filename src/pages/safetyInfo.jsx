import Layout from "../components/layout";
import "../styles/pages/safetyInfo.css";
import { useEffect } from "react";
function SafetyInfo() {
  useEffect(() => {
      document.title = "JatraPath | Safety Information";
    }, []);
  return (
    <Layout>
      <div className="safety-page">
        <div className="safety-hero">
          <h1>Traveler Safety Information</h1>
          <p>Stay prepared and travel safely across Bangladesh.</p>
        </div>

        <div className="safety-section">
          <h2>Emergency Contacts</h2>

          <div className="safety-card">
            <h3>National Emergency Service</h3>
            <p>📞 999</p>
          </div>

          <div className="safety-card">
            <h3>Tourist Police</h3>
            <p>📞 +880 1320-001122</p>
          </div>

          <div className="safety-card">
            <h3>Ambulance Service</h3>
            <p>📞 1994-999999</p>
          </div>
        </div>

        <div className="safety-section">
          <h2>Natural Disaster Precautions</h2>

          <div className="safety-card">
            <h3>Flood Safety</h3>
            <p>
              Avoid traveling during severe flood warnings and follow local
              authority instructions.
            </p>
          </div>

          <div className="safety-card">
            <h3>Cyclone Safety</h3>
            <p>
              Stay updated with weather forecasts and move to shelters if needed.
            </p>
          </div>

          <div className="safety-card">
            <h3>Hill Area Safety</h3>
            <p>
              Be cautious during heavy rainfall due to possible landslides.
            </p>
          </div>
        </div>

        <div className="safety-section">
          <h2>General Travel Safety Tips</h2>

          <ul className="tips-list">
            <li>Keep emergency numbers saved on your phone.</li>
            <li>Carry valid identification documents.</li>
            <li>Do not travel alone at night in unknown areas.</li>
            <li>Keep your belongings secure in crowded places.</li>
            <li>Follow local travel advisories and weather updates.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default SafetyInfo;