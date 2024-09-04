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
  CFormSelect,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CRow,
  CInputGroup,
  CInputGroupText,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilSearch, cilSettings, cilPencil, cilTrash, cilUser } from '@coreui/icons'

const CustomStyles1 = ({ rows, setRows, searchQuery, currentPage, pageSize, setCurrentPage }) => {
  const handleEditClick = (id) => {
    setRows((rows) =>
      rows.map((row) => (row.id === id ? { ...row, isEditing: !row.isEditing } : row)),
    )
  }

  const handleSaveClick = (id) => {
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, isEditing: false } : row)))
  }

  const handleInputChange = (e, id, field) => {
    const value = e.target.value
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)))
  }

  const handleDeleteClick = (id) => {
    setRows((rows) => rows.filter((row) => row.id !== id))
  }

  // Filter rows based on search query
  const filteredRows = rows.filter(row =>
    row.nature.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.computer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.receipt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.sentBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.sentOn.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.remarks.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.receivedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.receivedOn.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Paginate rows
  const totalPages = Math.ceil(filteredRows.length / pageSize)
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <>
      <CForm className="row g-3 needs-validation" noValidate>
        {/* Table */}
        <CCol xs={12} className="mt-4">
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                <CTableHeaderCell>Nature</CTableHeaderCell>
                <CTableHeaderCell>Computer</CTableHeaderCell>
                <CTableHeaderCell>Receipt</CTableHeaderCell>
                <CTableHeaderCell>Subject</CTableHeaderCell>
                <CTableHeaderCell>Sent By</CTableHeaderCell>
                <CTableHeaderCell>Sent On</CTableHeaderCell>
                <CTableHeaderCell>Section</CTableHeaderCell>
                <CTableHeaderCell>Remarks</CTableHeaderCell>
                <CTableHeaderCell>Received By</CTableHeaderCell>
                <CTableHeaderCell>Received On</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedRows.map((row) => (
                <CTableRow key={row.id}>
                  <CTableDataCell>{row.id}</CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.nature}
                        onChange={(e) => handleInputChange(e, row.id, 'nature')}
                      />
                    ) : (
                      row.nature
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.computer}
                        onChange={(e) => handleInputChange(e, row.id, 'computer')}
                      />
                    ) : (
                      row.computer
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.receipt}
                        onChange={(e) => handleInputChange(e, row.id, 'receipt')}
                      />
                    ) : (
                      row.receipt
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.subject}
                        onChange={(e) => handleInputChange(e, row.id, 'subject')}
                      />
                    ) : (
                      row.subject
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.sentBy}
                        onChange={(e) => handleInputChange(e, row.id, 'sentBy')}
                      />
                    ) : (
                      row.sentBy
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.sentOn}
                        onChange={(e) => handleInputChange(e, row.id, 'sentOn')}
                      />
                    ) : (
                      row.sentOn
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.section}
                        onChange={(e) => handleInputChange(e, row.id, 'section')}
                      />
                    ) : (
                      row.section
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.remarks}
                        onChange={(e) => handleInputChange(e, row.id, 'remarks')}
                      />
                    ) : (
                      row.remarks
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.receivedBy}
                        onChange={(e) => handleInputChange(e, row.id, 'receivedBy')}
                      />
                    ) : (
                      row.receivedBy
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.receivedOn}
                        onChange={(e) => handleInputChange(e, row.id, 'receivedOn')}
                      />
                    ) : (
                      row.receivedOn
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormSelect
                        value={row.status}
                        onChange={(e) => handleInputChange(e, row.id, 'status')}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </CFormSelect>
                    ) : (
                      <span
                        className={`badge bg-${row.status === 'Active' ? 'success' : 'danger'}`}
                      >
                        {row.status}
                      </span>
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <>
                        <CButton color="success" size="sm" onClick={() => handleSaveClick(row.id)}>
                          Save
                        </CButton>
                        <CButton
                          color="danger"
                          size="sm"
                          className="ms-2"
                          onClick={() => handleDeleteClick(row.id)}
                        >
                          Delete
                        </CButton>
                      </>
                    ) : (
                      <>
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilUser} />
                        </CButton>
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilPencil} />
                        </CButton>
                        <CButton color="danger" size="sm" onClick={() => handleDeleteClick(row.id)}>
                          <CIcon icon={cilTrash} />
                        </CButton>
                      </>
                    )}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CForm>

      {/* Pagination Controls */}
      <CRow className="mt-3">
        <CCol className="d-flex justify-content-end">
          <CButton
            color="primary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </CButton>
          <CButton color="secondary" className="mx-2" disabled>
            Page {currentPage} of {totalPages}
          </CButton>
          <CButton
            color="primary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </CButton>
        </CCol>
      </CRow>
      {/* Settings Icon with Dropdown */}
      <CDropdown className="position-fixed bottom-0 end-0 m-3">
        <CDropdownToggle
          color="secondary"
          style={{ borderRadius: '50%', width: '50px', height: '50px' }}
        >
          <CIcon icon={cilSettings} className="text-white" />
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem>PDF</CDropdownItem>
          <CDropdownItem>Copy</CDropdownItem>
          <CDropdownItem>Excel</CDropdownItem>
          <CDropdownItem>Print</CDropdownItem>
          <CDropdownItem>Show 50 rows</CDropdownItem>
          <CDropdownItem>Column visibility</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  )
}

const Validation = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      nature: 'Nature 1',
      computer: 'Computer 1',
      receipt: 'Receipt 1',
      subject: 'Subject 1',
      sentBy: 'Sender 1',
      sentOn: '2024-01-01',
      section: 'Section 1',
      remarks: 'Remarks 1',
      receivedBy: 'Receiver 1',
      receivedOn: '2024-01-02',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 2,
      nature: 'Nature 2',
      computer: 'Computer 2',
      receipt: 'Receipt 2',
      subject: 'Subject 2',
      sentBy: 'Sender 2',
      sentOn: '2024-01-03',
      section: 'Section 2',
      remarks: 'Remarks 2',
      receivedBy: 'Receiver 2',
      receivedOn: '2024-01-04',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 3,
      nature: 'Nature 3',
      computer: 'Computer 3',
      receipt: 'Receipt 3',
      subject: 'Subject 3',
      sentBy: 'Sender 3',
      sentOn: '2024-01-05',
      section: 'Section 3',
      remarks: 'Remarks 3',
      receivedBy: 'Receiver 3',
      receivedOn: '2024-01-06',
      status: 'Inactive',
      isEditing: false,
    },
    {
      id: 4,
      nature: 'Nature 4',
      computer: 'Computer 4',
      receipt: 'Receipt 4',
      subject: 'Subject 4',
      sentBy: 'Sender 4',
      sentOn: '2024-01-07',
      section: 'Section 4',
      remarks: 'Remarks 4',
      receivedBy: 'Receiver 4',
      receivedOn: '2024-01-08',
      status: 'Active',
      isEditing: false,
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      nature: '',
      computer: '',
      receipt: '',
      subject: '',
      sentBy: '',
      sentOn: '',
      section: '',
      remarks: '',
      receivedBy: '',
      receivedOn: '',
      status: 'Active',
      isEditing: true,
    }
    setRows([...rows, newRow])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Manage Records</strong>
            <div className="d-flex align-items-center">
              <CInputGroup>
                <CInputGroupText>
                  <CIcon icon={cilSearch} />
                </CInputGroupText>
                <CFormInput
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CInputGroup>
              <CButton color="primary" className="ms-2" onClick={handleAddRow}>
                Add
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <CustomStyles1
              rows={rows}
              setRows={setRows}
              searchQuery={searchQuery}
              currentPage={currentPage}
              pageSize={pageSize}
              setCurrentPage={setCurrentPage}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Validation
