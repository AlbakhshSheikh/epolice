/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormTextarea,
} from '@coreui/react'

const UserProfileForm = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [formData, setFormData] = useState({
    name: 'SP AKOLA',
    email: 'sp.akola@gmail.com',
    mobile: '8983006005',
    address: 'Office Of Superintendent Of Police, Akola, New Radhakisan Plots, Akola, Maharashtra, India',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0])
  }

  const handleSave = () => {
    // Handle save logic
    console.log('Form submitted:', formData, profileImage)
  }

  const handleCancel = () => {
    // Handle cancel logic
    setFormData({
      name: '',
      email: '',
      mobile: '',
      address: '',
    })
    setProfileImage(null)
  }

  return (
    <CRow className="justify-content-center">
      <CCol xs={10}>
        <CCard>
          <CCardHeader>
            <strong>User Profile</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CRow>
                <CCol md={6}>
                  <div className="mb-3 text-center">
                    <img
                      src={profileImage ? URL.createObjectURL(profileImage) : 'https://via.placeholder.com/150'}
                      alt="Profile Preview"
                      className="img-thumbnail"
                      style={{ width: '150px', height: '150px' }}
                    />
                    <div className="mt-2">
                      <CFormInput
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      <small className="text-muted d-block mt-1">
                        Note: Image should be jpg, png, jpeg type only.
                      </small>
                    </div>
                  </div>
                </CCol>
                <CCol md={6}>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel>Name *</CFormLabel>
                      <CFormInput
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel>Email *</CFormLabel>
                      <CFormInput
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel>Mobile No. *</CFormLabel>
                      <CFormInput
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        required
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CCol>
                      <CFormLabel>Address *</CFormLabel>
                      <CFormTextarea
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow className="mt-3">
                <CCol className="d-flex justify-content-end">
                  <CButton color="success" className="me-2" onClick={handleSave}>
                    Save
                  </CButton>
                  <CButton color="danger" onClick={handleCancel}>
                    Cancel
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserProfileForm
