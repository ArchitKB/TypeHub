import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css'; // Import a separate CSS file for styling
import Header from './Header2';
import image from './img.jpg';
// import placeholderImage1 from './placeholder1.jpg';
// import placeholderImage2 from './placeholder2.jpg';

const Landing = () => {
  // Animation for the main heading
  const headingAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Animation for the card1
  const card1Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000, delay: 200 },
  });

  // Animation for the card2
  const card2Animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000, delay: 400 },
  });

  return (
    <div className="landing-container">
      <animated.h1 style={headingAnimation} className="text-center mb-5">
        <Header />
      </animated.h1>

      <div className="row">
        {/* Image */}
        <div className="col-md-6 mb-4">
          <animated.img
            src={image}
            alt="typing"
            className="custom-image"
            style={card1Animation}
          />
        </div>

        {/* Guest Mode */}
        <animated.div className="col-md-6 mb-4 card1" style={card1Animation}>
          <div className="card">
            <div className="card-body text-left box1">
              <h5 className="card-title">Guest Mode</h5>
              <p className="card-text">
                Improve your typing skills without creating an account.
              </p>
              <Link to="/guest">
                <button className="btn btn-primary">Start Typing</button>
              </Link>
            </div>
          </div>
        </animated.div>

        {/* User Mode */}
        <animated.div className="col-md-6 mb-4 card2" style={card2Animation}>
          <div className="card">
            <div className="card-body text-center box2">
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
        </animated.div>
      </div>

      {/* Additional Images */}
      {/* <div className="row">
        <div className="col-md-6 mb-4">
          <img src={placeholderImage1} alt="Placeholder 1" className="custom-image" />
        </div>
        <div className="col-md-6 mb-4">
          <img src={placeholderImage2} alt="Placeholder 2" className="custom-image" />
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
