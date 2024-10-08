import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CRow,
  CFormLabel,
  CFormFeedback,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const CustomStyles = ({ formData, handleInputChange, handleSubmit }) => {
  const [validated, setValidated] = useState(false)

  const handleFormSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault() // Prevent page reload
      handleSubmit() // Call the parent function to add the new row
    }
    setValidated(true)
  }

  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
    >
      <CCol md={6}>
        <CFormLabel htmlFor="stationName">Police Station Category Name:</CFormLabel>
        <CFormInput
          type="text"
          id="stationName"
          required
          value={formData.Name}
          onChange={(e) => handleInputChange('Name', e.target.value)}
        />
        <CFormFeedback invalid>Please provide a valid station name.</CFormFeedback>
      </CCol>

      <CCol md={6}>
        <CFormLabel htmlFor="stationStatus">Status : </CFormLabel>
        <CFormSelect
          id="stationStatus"
          required
          value={formData.status}
          onChange={(e) => handleInputChange('status', e.target.value)}
        >
          <option disabled value="">
            Choose...
          </option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </CFormSelect>
        <CFormFeedback invalid>Please select a valid status.</CFormFeedback>
      </CCol>

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

const CustomStyles1 = ({ rows, handleEditClick, handleSaveClick, handleDeleteClick, handleInputChange }) => {
  return (
    <CTable bordered>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell>Sr.No</CTableHeaderCell>
          <CTableHeaderCell>Police Station Category</CTableHeaderCell>
          <CTableHeaderCell>Status</CTableHeaderCell>
          <CTableHeaderCell>Action</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {rows.map((row) => (
          <CTableRow key={row.id}>
            <CTableDataCell>{row.id}</CTableDataCell>
            <CTableDataCell>
              {row.isEditing ? (
                <CFormInput
                  value={row.Name}
                  onChange={(e) => handleInputChange(row.id, 'Name', e.target.value)}
                />
              ) : (
                row.Name
              )}
            </CTableDataCell>

            <CTableDataCell>
              {row.isEditing ? (
                <CFormSelect
                  value={row.status}
                  onChange={(e) => handleInputChange(row.id, 'status', e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CFormSelect>
              ) : (
                <span className={`badge bg-${row.status === 'Active' ? 'success' : 'danger'}`}>
                  {row.status}
                </span>
              )}
            </CTableDataCell>

            <CTableDataCell>
              {row.isEditing ? (
                <>
                <CTooltip content= "Save Change">
                  <CButton color="success" size="sm" onClick={() => handleSaveClick(row.id)}>
                    Save
                  </CButton>
                  </CTooltip>

                  <CTooltip content= "Delete">
                  <CButton color="danger" size="sm" className="ms-2" onClick={() => handleDeleteClick(row.id)}>
                    Delete
                  </CButton>
                  </CTooltip>
                </>
              ) : (
                <>
                <CTooltip content= "Edit">
                  <CButton color="info" size="sm" className="me-2" onClick={() => handleEditClick(row.id)}>
                    <CIcon icon={cilPencil} />
                  </CButton>
                  </CTooltip>

                  <CTooltip content= "Delete">
                  <CButton color="danger" size="sm" onClick={() => handleDeleteClick(row.id)}>
                    <CIcon icon={cilTrash} />
                  </CButton>
                  </CTooltip>
                </>
              )}
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
}

const Validation = () => {
  const [rows, setRows] = useState([
    { id: 1, Name: 'DYSP BALLAPUR', status: 'Active', isEditing: false },
    { id: 2, Name: 'DYSP AKOT', status: 'Active', isEditing: false },
  ])

  const [formData, setFormData] = useState({ Name: '', status: '' })

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = () => {
    const newRow = {
      id: rows.length + 1,
      Name: formData.Name,
      status: formData.status,
      isEditing: false,
    }
    setRows([...rows, newRow])
    setFormData({ Name: '', status: '' }) // Reset form after submission
  }

  const handleEditClick = (id) => {
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, isEditing: true } : row)))
  }

  const handleSaveClick = (id) => {
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, isEditing: false } : row)))
  }

  const handleDeleteClick = (id) => {
    setRows((rows) => rows.filter((row) => row.id !== id))
  }

  return (
    <CRow>
      {/* Custom Styles form */}
      <CCol xs={12} >
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Police Station Category :</strong>
          </CCardHeader>
          <CCardBody>
            <CustomStyles formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
          </CCardBody>
        </CCard>
      </CCol>

      {/* Master Police Stations List */}
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Master Police Stations List : </strong>
          </CCardHeader>
          <CCardBody>
            <CustomStyles1
              rows={rows}
              handleEditClick={handleEditClick}
              handleSaveClick={handleSaveClick}
              handleDeleteClick={handleDeleteClick}
              handleInputChange={handleInputChange}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
