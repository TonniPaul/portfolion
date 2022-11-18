import "./error.css";

const ErrorPage = () => {
  return (
    <main className="flex column error_cont">
      <h1 className="error_text">
        We're sorry, but the page you are trying to load does not exist or may
        have been removed!
      </h1>
      <a href="/" className="btn">
        GO BACK TO HOME
      </a>
    </main>
  );
};

export default ErrorPage;
