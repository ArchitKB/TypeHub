import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import keypad from './keypad.jpg';
export default function Login () {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response from server:', data);
        if (data.success) {
          navigate('/');
        }
        else{
          alert("Enter valid credentials");
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const sectionStyle = {
    backgroundColor: '#9A616D',
    height: '100vh'
  };

  // const imgStyle = {
  //   borderRadius: '1rem 0 0 1rem',
  //   maxWidth: '100%'
  // };

  return (
    <section style={sectionStyle}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={keypad}
                    alt="login form"
                    style={{ width: '480px', height: '520.5px', margin: '25px 0px 5px 5px' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0"></span>
                      </div>

                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                      <div className="form-outline mb-4">
                        <input name="email" type="email" id="form2Example17" className="form-control form-control-lg" onChange={handleChange}/>
                        <label className="form-label" htmlFor="form2Example17" name="email">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input name="password" type="password" id="form2Example27" className="form-control form-control-lg" onChange={handleChange}/>
                        <label className="form-label" htmlFor="form2Example27" name="password">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>

                      <a className="small text-muted" href="#!">Forgot password?</a>
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="/signup" style={{ color: '#393f81' }}>Register here</a></p>
                      <a href="#!" className="small text-muted">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
