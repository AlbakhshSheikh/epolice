import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CForm,
  CFormInput,
  CInputGroup,
  CRow,
  CCol
} from '@coreui/react';
import './Login.css'; // Import your CSS file
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Login = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    margin: '0',
    padding: '0'
  };

  const leftSectionStyle = {
    width: '50%',
    backgroundImage: 'url("src/assets/brand/E Police Login Page.jpg")',
    backgroundSize: '100% 100%',
    backgroundPosition: 'center'
  };

  const rightSectionStyle = {
    width: '50%',
    height: '100vh',
    backgroundColor: '#B3B3B3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '100px',
    paddingLeft: '20px',
    paddingRight: '20px'
  };

  const imageStyle = {
    width: '350px',
    height: '350px',
    marginBottom: '20px'
  };

  const headingStyle = {
    margin: '0',
    fontSize: '1.5rem',
    textAlign: 'center'
  };

  const inputGroupStyle = {
    marginBottom: '1.5rem',
    width: '150%',
    height: '20'
  };

  const appDownloadStyle = {
    marginTop: '1.5rem',
    display: 'flex',
    alignItems: 'center',  // Aligns text and images vertically centered
    gap: '10px'           // Adds space between the text and the images
  };

  const iconStyle = {
    width: '30px',
    marginRight: '0.5rem'
  };

  const buttonStyle = {
    width: '150%',
    backgroundColor: 'black'
  };

  return (
    <div style={containerStyle}>
      <div style={leftSectionStyle}></div>

      <div style={rightSectionStyle}>
        <img src="src/assets/brand/E-Police.png" alt="Centered Image" style={imageStyle} />
        <h2 style={headingStyle}>Smart Tracking for Efficient Patrolling</h2>
        <CForm className='pt-5'>
          <CInputGroup style={inputGroupStyle}>
            <CFormInput className="centered-placeholder" placeholder="Email Address" autoComplete="username" />
          </CInputGroup>
          <CInputGroup style={inputGroupStyle}>
            <CFormInput
              className="centered-placeholder"
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

          </CRow>
        </CForm>
        <CCol xs={12} className="text-right mt-2">
          <Link to="/register"><CButton className="forgot-password-btn" color="link" >　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　Forgot Password?</CButton></Link>

        </CCol>
        <div style={appDownloadStyle}>
          <p className='mt-2 px-2'>　　　　　　　　　　　　　　Download our Apps</p>
          <img src="src\views\pages\login\Iphone.png" alt="Apple Store" style={iconStyle} /> {/* Replace with your app store logo */}
          <a href="https://play.google.com/store/apps/details?id=com.tbd.epoliceapp&hl=en_IN&pli=1" target="_blank" rel="noopener noreferrer">
            <img src="src\views\pages\login\android.png" alt="Google Play" style={iconStyle} /> {/* Replace with your play store logo */}
          </a>

        </div>
      </div>
    </div>
  );
};

export default Login;
