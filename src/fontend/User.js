import React from 'react';

export default function User() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Typing Master</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success ml-2" href="#">Get Started</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Improve Your Typing Speed</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo turpis eget
              tristique cursus. Phasellus et cursus felis.</p>
            <a className="btn btn-primary" href="#">Learn More</a>
          </div>
          <div className="col-md-6">
            <img src="typing-image.jpg" alt="Typing Image" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
