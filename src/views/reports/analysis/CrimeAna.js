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
    row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.crime.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.date.toLowerCase().includes(searchQuery.toLowerCase()),
    // row.all.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.officer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.percentage.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                <CTableHeaderCell>Police Station</CTableHeaderCell>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableHeaderCell>Address </CTableHeaderCell>
                <CTableHeaderCell>Crime</CTableHeaderCell>
                <CTableHeaderCell>Section</CTableHeaderCell>
                <CTableHeaderCell>Crime Date</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
                {/* 
                <CTableHeaderCell>How many officer and men Scanning OR code</CTableHeaderCell>
                <CTableHeaderCell>Total Percentage of Patrolling</CTableHeaderCell>

                <CTableHeaderCell>Selfie Pic</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell> */}

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
                        value={row.name}
                        onChange={(e) => handleInputChange(e, row.id, 'name')}
                      />
                    ) : (
                      row.name
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.address}
                        onChange={(e) => handleInputChange(e, row.id, 'address')}
                      />
                    ) : (
                      row.address
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.crime}
                        onChange={(e) => handleInputChange(e, row.id, 'crime')}
                      />
                    ) : (
                      row.crime
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
                        value={row.date}
                        onChange={(e) => handleInputChange(e, row.id, 'date')}
                      />
                    ) : (
                      row.date
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

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.all}
                        onChange={(e) => handleInputChange(e, row.id, 'all')}
                      />
                    ) : (
                      row.all
                    )}
                  </CTableDataCell> */}
                  {/* 
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.officer}
                        onChange={(e) => handleInputChange(e, row.id, 'officer')}
                      />
                    ) : (
                      row.officer
                    )}
                  </CTableDataCell> */}
                  {/* 
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.percentage}
                        onChange={(e) => handleInputChange(e, row.id, 'percentage')}
                      />
                    ) : (
                      row.percentage
                    )}
                  </CTableDataCell> */}

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

                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CForm>

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
      station: 'Maharashtra',
      name: 'spakola',
      address: 'akola',
      crime: 'lotera',
      section: '0',
      date: '	2024-01-05',
      isEditing: false,
      // all: '0',
      // officer: '0',
      // percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
    },
    {
      id: 2,
      station: 'Maharashtra',
      name: 'spakola',
      address: 'akola',
      crime: 'lotera',
      section: '0',
      date: '	2024-01-05',
      isEditing: false,
      // all: '0',
      // officer: '0',
      // percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
    },
    {
      id: 3,
      station: 'Maharashtra',
      name: 'spakola',
      address: 'akola',
      crime: 'lotera',
      section: '0',
      date: '	2024-01-05',
      isEditing: false,
      // all: '0',
      // officer: '0',
      // percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
    },
    {
      id: 4,
      station: 'Maharashtra',
      name: 'spakola',
      address: 'akola',
      crime: 'lotera',
      section: '0',
      date: '	2024-01-05',
      isEditing: false,
      // all: '0',
      // officer: '0',
      // percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
    },
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
      name: '',
      address: '',
      crime: '',
      section: '',
      date: '',
      isEditing: false,
      // all: '0',
      // officer: '0',
      // percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
    }
    setRows([...rows, newRow])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Manage Criminal Analysis</strong>
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
                Export
              </CButton>
            </div>
          </CCardHeader>

          <CCardHeader className="d-flex p-2">
            <CInputGroup className='p-1'>
              <CInputGroupText>From Date</CInputGroupText>
              <CFormInput
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>To Date</CInputGroupText>
              <CFormInput
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>Police Station Name</CInputGroupText>
              <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CFormSelect>
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>
                <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)} style={{width:'400px'}}>
                  <option value="Criminal">Criminal Name</option>
                  <option value="option1">Option1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </CFormSelect>
              </CInputGroupText>
            </CInputGroup>

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
