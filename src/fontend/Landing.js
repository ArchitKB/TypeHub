import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'; // Import a separate CSS file for styling

const Landing = () => {
  return (
    <div className="landing-container">
      <h1 className="text-center mb-5">Typing Master</h1>

      <div className="row">
        {/* Guest Mode */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">Guest Mode</h5>
              <p className="card-text">
                Improve your typing skills without creating an account.
              </p>
              <Link to="/guest">
                <button className="btn btn-primary">Start Typing</button>
              </Link>
            </div>
          </div>
        </div>

        {/* User Mode */}
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">User Mode</h5>
              <p className="card-text">
                Track your progress and save your typing history by logging in.
              </p>
              <Link to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
              <Link to="/signup" className="ms-2">
                <button className="btn btn-outline-secondary">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
