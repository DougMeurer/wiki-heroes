import { Link } from "react-router-dom";
import img from "../../Images/captain_america_poster.webp";

function ErrorPage() {
  return (
    <div>
      <h1>404 PAGE NOT FOUND</h1>
      <div>
        <img src={img} alt="PageNotFound" />
      </div>
      <p>
        Check that you typed the address correctly, go back to your previous
        page or try using our site search to find something specific.
      </p>
      <Link to="/">
        <p>Back to Home Page</p>
      </Link>
    </div>
  );
}

export default ErrorPage;
