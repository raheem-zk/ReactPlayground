import React from 'react';
import { useRouteError } from 'react-router-dom';
import './Error.css';
const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container">
      <h1 className="error-heading">Error Page</h1>
      <h2 className="error-status">
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
