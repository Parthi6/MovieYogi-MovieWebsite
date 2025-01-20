import React from 'react';
import notfound from '../assets/404.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column min-vh-100">
      <img src={notfound} className="img-fluid custom-img" alt="Page Not Found" />
      <p className="text-center mt-3">
        <Link to="/" className="btn btn-danger">Go to Home Page</Link>
      </p>
    </div>
  );
};

export default PageNotFound;