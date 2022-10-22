import React from "react";

const Error = () => {
  return (
    <section className="page-error">
      <h2>Page Not Found</h2>{" "}
      <p>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      <a href="/" className="btn">
        Back to our site
      </a>
    </section>
  );
};

export default Error;
