import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <h1>404. PAGE NOT FOUND</h1>
      <Link to="/">
        <p>Back to Home Page</p>
      </Link>
    </>
  );
}

export default ErrorPage;
