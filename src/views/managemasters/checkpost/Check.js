/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTooltip,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilPencil, cilTrash } from '@coreui/icons'

const CustomStyles = ({ onAddEntry }) => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    policeStation: '',
    checkpostArea: '',
    assignedBy: '',
    purpose: '',
    createdOn: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      onAddEntry(formData)
      setFormData({ policeStation: '', checkpostArea: '', assignedBy: '', purpose: '', createdOn: '' })
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
        <CFormSelect
          id="validationCustomCity2"
          name="policeStation"
          value={formData.policeStation}
          onChange={handleChange}
          required
        >
          <option disabled value="">Choose...</option>
          <option>MIDC</option>
          <option>NAGPUR</option>
          <option>HINGNA</option>
          <option>WARDHA</option>
          <option>AKOLA</option>
          <option>AMRAWATI</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomCity1">Checkpost Area:</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustomCity1"
          name="checkpostArea"
          value={formData.checkpostArea}
          onChange={handleChange}
          required
        />
        <CFormFeedback invalid>Please provide a valid area.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomCity1">Assigned By:</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustomCity1"
          name="assignedBy"
          value={formData.assignedBy}
          onChange={handleChange}
          required
        />
        <CFormFeedback invalid>Please provide a valid name.</CFormFeedback>
      </CCol>
      <CCol md={8}>
        <CFormLabel htmlFor="validationCustomCity1">Purpose:</CFormLabel>
        <CFormInput
          type="text"
          id="validationCustomCity1"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        />
        <CFormFeedback invalid>Please provide a valid purpose.</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomDOB">Created on:</CFormLabel>
        <CFormInput
          type="date"
          id="validationCustomDOB"
          name="createdOn"
          value={formData.createdOn}
          onChange={handleChange}
          required
        />
        <CFormFeedback invalid>Please provide a valid date.</CFormFeedback>
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

const CustomStyles1 = ({ entries, onEdit, onDelete }) => {
  const [editIndex, setEditIndex] = useState(null)
  const [editedData, setEditedData] = useState({})
  const [currentPage, setCurrentPage] = useState(1)
  const entriesPerPage = 10

  // Calculate pagination variables
  const indexOfLastEntry = currentPage * entriesPerPage
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage
  const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry)
  const totalPages = Math.ceil(entries.length / entriesPerPage)

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditedData({ ...editedData, [name]: value })
  }

  const startEdit = (index, entry) => {
    setEditIndex(index)
    setEditedData(entry)
  }

  const saveEdit = (index) => {
    onEdit(index, editedData)
    setEditIndex(null)
  }

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
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
          {currentEntries.length === 0 ? (
            <CTableRow>
              <CTableDataCell colSpan="7" className="text-center">
                No Data Available
              </CTableDataCell>
            </CTableRow>
          ) : (
            currentEntries.map((entry, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{indexOfFirstEntry + index + 1}</CTableDataCell>
                <CTableDataCell>
                  {editIndex === indexOfFirstEntry + index ? (
                    <CFormInput
                      type="text"
                      name="policeStation"
                      value={editedData.policeStation}
                      onChange={handleEditChange}
                    />
                  ) : (
                    entry.policeStation
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editIndex === indexOfFirstEntry + index ? (
                    <CFormInput
                      type="text"
                      name="checkpostArea"
                      value={editedData.checkpostArea}
                      onChange={handleEditChange}
                    />
                  ) : (
                    entry.checkpostArea
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editIndex === indexOfFirstEntry + index ? (
                    <CFormInput
                      type="text"
                      name="assignedBy"
                      value={editedData.assignedBy}
                      onChange={handleEditChange}
                    />
                  ) : (
                    entry.assignedBy
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editIndex === indexOfFirstEntry + index ? (
                    <CFormInput
                      type="text"
                      name="purpose"
                      value={editedData.purpose}
                      onChange={handleEditChange}
                    />
                  ) : (
                    entry.purpose
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editIndex === indexOfFirstEntry + index ? (
                    <CFormInput
                      type="date"
                      name="createdOn"
                      value={editedData.createdOn}
                      onChange={handleEditChange}
                    />
                  ) : (
                    entry.createdOn
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  {editIndex === indexOfFirstEntry + index ? (
                    <>
                      <CTooltip content ="Save Change">
                      <CButton color="success" size="sm" onClick={() => saveEdit(indexOfFirstEntry + index)}>
                        Save
                      </CButton>
                      </CTooltip>
                      {' '}

                      <CTooltip content ="Delete">
                      <CButton color="warning" size="sm" onClick={() => setEditIndex(null)}>
                        Cancel
                      </CButton>
                      </CTooltip>
                    </>
                  ) : (
                    <>

                      <CTooltip content="Edit">
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => startEdit(indexOfFirstEntry + index, entry)} style={{ cursor: 'pointer' }}
                        >
                          <CIcon icon={cilPencil} />
                        </CButton>
                      </CTooltip>

                      <CTooltip content="Delete">
                        <CButton
                          color="danger"
                          size="sm"
                          onClick={() => onDelete(indexOfFirstEntry + index)} style={{ cursor: 'pointer' }}>
                          <CIcon icon={cilTrash} />
                        </CButton>
                      </CTooltip>

                    </>
                  )}
                </CTableDataCell>
              </CTableRow>
            ))
          )}
        </CTableBody>
      </CTable>

      <div className="d-flex justify-content-end mt-3">
  
        <CButton
          color="primary"
          disabled={currentPage === 1}
          onClick={previousPage}
        >
          Previous
        </CButton>
        <CButton color="secondary" className="mx-2" disabled>
          Page {currentPage} of {totalPages}
        </CButton>
        <CButton
          color="primary"
          disabled={currentPage === totalPages}
          onClick={nextPage}
        >
          Next
        </CButton>
      </div>

    </CCol>
  )
}

const Validation = () => {
  const [entries, setEntries] = useState([])

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry])
  }

  const handleEditEntry = (index, updatedEntry) => {
    const newEntries = entries.map((entry, i) => (i === index ? updatedEntry : entry))
    setEntries(newEntries)
  }

  const handleDeleteEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index)
    setEntries(newEntries)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className='mb-4'>
          <CCardHeader>
            <strong>Police Station Category</strong>
          </CCardHeader>
          <CCardBody>
            <CustomStyles onAddEntry={handleAddEntry} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>All Master Police Stations List:</strong>
          </CCardHeader>
          <CCardBody>
            <CustomStyles1 entries={entries} onEdit={handleEditEntry} onDelete={handleDeleteEntry} />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
  
export default Validation
