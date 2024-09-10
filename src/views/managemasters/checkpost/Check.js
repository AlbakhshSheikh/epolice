/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const CustomStyles = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomCity2">Police Station :</CFormLabel>
        <CFormSelect id="validationCustomCity2" required>
          <option disabled>Choose...</option>
          <option>--select--</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomCity1">Checkpost Area:</CFormLabel>
        <CFormInput type="text" id="validationCustomCity1" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomCity1">Assigned By:</CFormLabel>
        <CFormInput type="text" id="validationCustomCity1" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      {/* <CCol md={4}>
        <CFormLabel htmlFor="validationCustomEmail1">Email</CFormLabel>
        <CFormInput type="email" id="validationCustomEmail1" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
        <CFormFeedback invalid>Please provide a valid email.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomEmail2">Email</CFormLabel>
        <CFormInput type="email" id="validationCustomEmail2" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
        <CFormFeedback invalid>Please provide a valid email.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol> */}
      <CCol md={8}>
        <CFormLabel htmlFor="validationCustomCity1">Purpose:</CFormLabel>
        <CFormInput type="text" id="validationCustomCity1" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomDOB">Created on:</CFormLabel>
        <CFormInput type="date" id="validationCustomDOB" required />
        <CFormFeedback invalid>Please provide a valid date of birth.</CFormFeedback>
      </CCol>

      {/* <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol> */}
      <CCol xs={12}>
        <div className="d-flex justify-content-end">
          <CButton color="primary" type="submit">
            Add Now
          </CButton>
        </div>
      </CCol>
    </CForm>
  )
}

const CustomStyles1 = () => {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      {/* Table */}
      <CCol xs={12} className="mt-4">
        <CTable bordered>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Sr.</CTableHeaderCell>
              <CTableHeaderCell>Police Station</CTableHeaderCell>
              <CTableHeaderCell>Checkpost Area</CTableHeaderCell>
              <CTableHeaderCell>Assigned By</CTableHeaderCell>
              <CTableHeaderCell>Purpose</CTableHeaderCell>
              <CTableHeaderCell>Created On</CTableHeaderCell>
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>1</CTableDataCell>
              <CTableDataCell>Data 1</CTableDataCell>
              <CTableDataCell>Data 2</CTableDataCell>
              <CTableDataCell>Data 3</CTableDataCell>
              <CTableDataCell>Data 4</CTableDataCell>
              <CTableDataCell>Data 5</CTableDataCell>
              <CTableDataCell>Data 6</CTableDataCell>
            </CTableRow>
            {/* Additional rows can be added here */}
          </CTableBody>
        </CTable>
      </CCol>
    </CForm>
  )
}

const Validation = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Police Station Category:</strong>
          </CCardHeader>
          <CCardBody>
            <CustomStyles />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Master Police Stations List:</strong>
          </CCardHeader>
          <CCardBody>
            <CustomStyles1 />
          </CCardBody>
        </CCard>
      </CCol>
      {/* Additional sections can be added here */}
    </CRow>
  )
}

export default Validation
