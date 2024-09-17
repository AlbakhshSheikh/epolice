import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    margin: '0',
    padding: '0'
  };

  const leftSectionStyle = {
    width: '50%',
    backgroundImage: 'url("src/assets/brand/E Police Login Page.jpg")', // Use the correct path for your image
    backgroundSize: '100% 100%',
    // backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center' 
  };

  const rightSectionStyle = {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  };

  const formContainerStyle = {
    textAlign: 'center'
  };

  const logoStyle = {
    width: '150px',
    marginBottom: '1.5rem'
  };

  const inputGroupStyle = {
    marginBottom: '1.5rem'
  };

  const buttonStyle = {
    width: '100%'
  };

  const appDownloadStyle = {
    marginTop: '1.5rem'
  };

  const iconStyle = {
    width: '50px',
    marginRight: '0.5rem'
  };

  return (
    <div style={containerStyle}>
      {/* Left section with the background image */}
      <div style={leftSectionStyle}></div>

      {/* Right section - Login form */}
      <div style={rightSectionStyle}>
        <CContainer>
          <CCard className="p-4">
            <CCardBody>
              <div style={formContainerStyle}>
                {/* Logo and tagline */}
                <img src="src/assets/brand/E-Police.png" alt="Police Logo" style={logoStyle} /> {/* Replace with your logo path */}
                <h2>E-POLICE</h2>
                <p>Smart Tracking for Efficient Patrolling</p>
              </div>
              <CForm>
                <CInputGroup style={inputGroupStyle}>
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput placeholder="Email Address" autoComplete="username" />
                </CInputGroup>
                <CInputGroup style={inputGroupStyle}>
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                </CInputGroup>
                <CRow>
                  <CCol xs={12}>
                    <Link to="/dashboard">
                      <CButton color="primary" style={buttonStyle}>
                        Login
                      </CButton>
                    </Link>
                  </CCol>
                  <CCol xs={12} className="text-right mt-2">
                    <CButton color="link">
                      Forgot Password?
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
              {/* Download Apps */}
              <div style={appDownloadStyle}>
                <p>Download our Apps</p>
                <div>
                  <img src="/path/to/apple_store_logo.png" alt="Apple Store" style={iconStyle} /> {/* Replace with your app store logo */}
                  <img src="/path/to/google_play_logo.png" alt="Google Play" style={iconStyle} /> {/* Replace with your play store logo */}
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    </div>
  )
}

export default Login
