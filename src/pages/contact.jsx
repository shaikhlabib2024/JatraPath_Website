import Layout from "../components/layout";
import "../styles/pages/infoPages.css";

const Contact = () => {
  return (
    <Layout>
      <div className="info-page">
        <div className="info-hero">
          <h1>Contact Us</h1>
          <p>We are here to help you anytime.</p>
        </div>

        <div className="info-container">
          <div className="info-card">
            <h2>Email</h2>
            <p>support@jatrapath.com</p>
          </div>

          <div className="info-card">
            <h2>Phone</h2>
            <p>+880 1700-000000</p>
          </div>

          <div className="info-card">
            <h2>Office Address</h2>
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;