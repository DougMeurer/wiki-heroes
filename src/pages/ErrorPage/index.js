import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../assets/huh-the-watcher.gif";

function ErrorPage() {
  return (
    <div className="d-flex bg-danger row align-items-end">
      <div className="mt-4 pb-5">
        <img
          src={img}
          alt="PageNotFound"
          style={{ marginTop: "15px", marginBottom: "15px" }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <Alert>
          <Alert.Heading style={{ color: "black", marginTop: "20px" }}>
            NOT EVEN THE EYE OF AUTU SEEMS TO FIND YOUR REQUEST
          </Alert.Heading>
          <p className="h6" style={{ color: "black", marginBottom: "20px" }}>
            Check that you typed the address correctly, go back to your previous
            page or try using our site search to find something specific.
          </p>
          <Link to="/" style={{ color: "#0ed2f7" }}>
            <span>
              <strong>Back to Home Page</strong>
            </span>
          </Link>
        </Alert>
      </div>
      <footer className="bg-danger mb-5 row align-items-end"></footer>
    </div>
  );
}

export default ErrorPage;
