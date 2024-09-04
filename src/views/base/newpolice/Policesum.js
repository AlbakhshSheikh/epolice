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
    row.station.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.police.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.incident.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.time.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Paginate rows
  const totalPages = Math.ceil(filteredRows.length / pageSize)
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <>
      <CForm className="row g-3 needs-validation" noValidate>
        <CCol xs={12} className="mt-4">
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                {/* <CTableHeaderCell>Sr.No</CTableHeaderCell>
                <CTableHeaderCell>Station Name</CTableHeaderCell>
                <CTableHeaderCell>Police Name</CTableHeaderCell>
                <CTableHeaderCell>Incident Name</CTableHeaderCell>
                <CTableHeaderCell>Date</CTableHeaderCell>
                <CTableHeaderCell>Time</CTableHeaderCell>
                <CTableHeaderCell>Location</CTableHeaderCell>
                <CTableHeaderCell>Selfie Pic</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell> */}
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedRows.map((row) => (
                <CTableRow key={row.id}>
                  <CTableDataCell>{row.id}</CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.station}
                        onChange={(e) => handleInputChange(e, row.id, 'station')}
                      />
                    ) : (
                      row.station
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.police}
                        onChange={(e) => handleInputChange(e, row.id, 'police')}
                      />
                    ) : (
                      row.police
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.incident}
                        onChange={(e) => handleInputChange(e, row.id, 'incident')}
                      />
                    ) : (
                      row.incident
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.date}
                        onChange={(e) => handleInputChange(e, row.id, 'date')}
                      />
                    ) : (
                      row.date
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.time}
                        onChange={(e) => handleInputChange(e, row.id, 'time')}
                      />
                    ) : (
                      row.time
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.location}
                        onChange={(e) => handleInputChange(e, row.id, 'location')}
                      />
                    ) : (
                      row.location
                    )}
                  </CTableDataCell>

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.selfie}
                        onChange={(e) => handleInputChange(e, row.id, 'selfie')}
                      />
                    ) : (
                      <>
                        {row.selfie && (
                          <img
                            src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1725271852~exp=1725275452~hmac=c6cff51c8b70509d2d25131b776d91adb73ef04584c11d70e6446fab636de852&w=826'
                            // src={row.selfie}
                            alt="Selfie"
                            style={{ width: '100px', height: 'auto', objectFit: 'contain' }}
                          />
                        )}
                      </>
                    )}
                  </CTableDataCell> */}

                  {/* <CTableDataCell>
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
                  </CTableDataCell> */}

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
                        {/* <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilPencil} />
                        </CButton>
                        <CButton color="danger" size="sm" onClick={() => handleDeleteClick(row.id)}>
                          <CIcon icon={cilTrash} />
                        </CButton> */}
                      </>
                    )}
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CForm>

      {/* <CRow className="mt-3">
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
      </CRow> */}
      
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
    // {
    //   id: 1,
    //   station: 'Maharashtra',
    //   police: 'Akola',
    //   incident: '	Robbery',
    //   date: '2022-08-22',
    //   time: '	12:00:00',
    //   location: '52 NTA Apara Link Rd, Mgbuoba 500262, Port Harcourt, Nigeria',
    //   // selfie: 'Images'
    //   status: 'Active',
    //   // isEditing: false,
    // },
    // {
    //   id: 2,
    //   station: 'Maharashtra',
    //   police: 'Akola',
    //   incident: '	Robbery',
    //   date: '2022-08-22',
    //   time: '	12:00:00',
    //   location: '52 NTA Apara Link Rd, Mgbuoba 500262, Port Harcourt, Nigeria',
    //   // selfie: 'Images'
    //   status: 'Active',
    //   // isEditing: false,
    // },
    // {
    //   id: 3,
    //   station: 'Maharashtra',
    //   police: 'Akola',
    //   incident: '	Robbery',
    //   date: '2022-08-22',
    //   time: '	12:00:00',
    //   location: '52 NTA Apara Link Rd, Mgbuoba 500262, Port Harcourt, Nigeria',
    //   // selfie: 'Images'
    //   status: 'Active',
    //   // isEditing: false,
    // },
    // {
    //   id: 4,
    //   station: 'Maharashtra',
    //   police: 'Akola',
    //   incident: '	Robbery',
    //   date: '2022-08-22',
    //   time: '	12:00:00',
    //   location: '52 NTA Apara Link Rd, Mgbuoba 500262, Port Harcourt, Nigeria',
    //   // selfie: 'Images'
    //   status: 'Active',
    //   // isEditing: false,e,
    // },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const pageSize = 5

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      station: '',
      police: '',
      incident: '',
      date: '',
      time: '',
      location: '',
      // selfie: 'Images'
      status: 'Active',
      // isEditing: false,
    }
    setRows([...rows, newRow])
  }

  return (
  <CRow>
    <CCol xs={12}>
      <CCard className="mb-4">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <strong>New Police Summary Report:</strong>
          <div className="d-flex align-items-center">
            <CButton color="primary" className="ms-2" onClick={handleAddRow}>
              Search
            </CButton>
          </div>
        </CCardHeader>

        <CCardBody>
          <CRow className="gy-3">  {/* Add gy-3 for gap between rows */}
            <CCol md={6} lg={3}>
              <CInputGroup>
                <CInputGroupText>Station</CInputGroupText>
                <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>

            <CCol md={6} lg={3}>
              <CInputGroup>
                <CInputGroupText>From Date</CInputGroupText>
                <CFormInput
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </CInputGroup>
            </CCol>

            <CCol md={6} lg={3}>
              <CInputGroup>
                <CInputGroupText>To Date</CInputGroupText>
                <CFormInput
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </CInputGroup>
            </CCol>

            <CCol md={6} lg={3}>
              <CInputGroup>
                <CInputGroupText>View Type</CInputGroupText>
                <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </CFormSelect>
              </CInputGroup>
            </CCol>
          </CRow>
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
