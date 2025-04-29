import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className="error-page ">
                <h1 className="heading">
                    404
                </h1>
                <h2 className="subheading">
                    Oops! Page Not Found
                </h2>
                <p className="description">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="button"
                >
                    Go Back to Home
                </Link>
            </div>
        </>
    );
};

export default Error;