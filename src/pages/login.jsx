
import { useState } from 'react'
import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'
import loginPhoto1 from '../assets/img/logPic1.webp';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
from 'mdb-react-ui-kit';

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = () => {
        console.log("before:" + user)
        auth.login(user)
        console.log("after:" + user)

        navigate('/dashboard')
    };

    document.body.style = 'background: #0A1828;';
    return (
        <section className="vh-100" style={{ backgroundColor: '#0A1828' }}>
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
            <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                    src={loginPhoto1}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0" style={{ marginLeft: '-15px' }}>Welcome to AI Institute Student Portal</span>
                    </div>
                     <div style={{ color: 'black', fontSize: '20px', margin: '15px 0', fontWeight: 'bold', marginBottom: '20px' }}>
                      Session Jan. 8 - 19, 2024
                    </div>
                    <h6 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Login with your email provided by Applied AI Institute
                    </h6>
                    <div className="form-outline mb-4">
                        <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            onChange = {(e) => setUser(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form2Example17">
                            Email address
                        </label>
                    </div>
                    <div className="form-outline mb-4">
                        <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example27">
                            Password
                        </label>
                    </div>
                    <div className="pt-1 mb-4">
                        <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleLogin}
                        >
                        Login
                        </button>
                    </div>
                     {/* Small text underneath the login button */}
                     <p className="small text-muted mb-0">
                      Contact info@aiinstitute.us if issues in connecting
                    </p>
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

export default Login;

