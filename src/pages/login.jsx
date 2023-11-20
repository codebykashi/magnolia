
import { useState } from 'react'
import { useAuth } from '../utils/auth'
import { useNavigate } from 'react-router-dom'

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
    <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                    <h2 className="fw-bold mb-2 text-center">Login — AAII Hackathon</h2>
                    <p className="text-white-50 mb-3">Please enter your login and password!</p>
                    <MDBInput onChange = {(e) => setUser(e.target.value)} wrapperClass='mb-4 w-100' label='Username' id='formControlLg' type='email' size="lg"/>
                    <MDBInput wrapperClass='mb-4 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                    <MDBBtn size='lg' onClick={handleLogin}>
                        Login
                    </MDBBtn>
                    <hr className="my-4" />
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
}

export default Login;