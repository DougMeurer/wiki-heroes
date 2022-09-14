import { Link } from "react-router-dom";
import img from "../../Images/huh-the-watcher.gif";

function ErrorPage() {
  return (
    <div>
      <div>
        <img src={img} alt="PageNotFound" />
      </div>
      <h1>NOT EVEN THE EYE OF AUTU SEEMS TO FIND YOUR REQUEST</h1>
      <p>
        <strong>
          Check that you typed the address correctly, go back to your previous
          page or try using our site search to find something specific.
        </strong>
      </p>
      <Link to="/">
        <p>
          <strong>Back to Home Page</strong>
        </p>
      </Link>
    </div>
  );
}

export default ErrorPage;
