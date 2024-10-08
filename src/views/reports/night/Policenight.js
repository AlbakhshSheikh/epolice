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
import { CIcon } from '@coreui/icons-react'
import { cilSearch, cilSettings } from '@coreui/icons'

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
      row.total.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.day.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.day1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.after.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.even.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.all.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.officer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.percentage.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Total QR Points</CTableHeaderCell>
                <CTableHeaderCell>05:00 AM to 07:00 Am </CTableHeaderCell>
                <CTableHeaderCell>07:00 AM to 09:00 AM</CTableHeaderCell>
                <CTableHeaderCell>11:00 AM to 02:00 PM</CTableHeaderCell>
                <CTableHeaderCell>06:00 PM to 11:00 PM</CTableHeaderCell>
                <CTableHeaderCell>Other [05:00 AM to 11.00 PM] </CTableHeaderCell>
                <CTableHeaderCell>How many officer and men Scanning OR code</CTableHeaderCell>
                <CTableHeaderCell>Total Percentage of Patrolling</CTableHeaderCell>

                {/* <CTableHeaderCell>Selfie Pic</CTableHeaderCell> */}
                {/* <CTableHeaderCell>Status</CTableHeaderCell>
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
                        value={row.total}
                        onChange={(e) => handleInputChange(e, row.id, 'total')}
                      />
                    ) : (
                      row.total
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.day}
                        onChange={(e) => handleInputChange(e, row.id, 'day')}
                      />
                    ) : (
                      row.day
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.day1}
                        onChange={(e) => handleInputChange(e, row.id, 'day1')}
                      />
                    ) : (
                      row.day1
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.after}
                        onChange={(e) => handleInputChange(e, row.id, 'after')}
                      />
                    ) : (
                      row.after
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.even}
                        onChange={(e) => handleInputChange(e, row.id, 'even')}
                      />
                    ) : (
                      row.even
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.all}
                        onChange={(e) => handleInputChange(e, row.id, 'all')}
                      />
                    ) : (
                      row.all
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.officer}
                        onChange={(e) => handleInputChange(e, row.id, 'officer')}
                      />
                    ) : (
                      row.officer
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.percentage}
                        onChange={(e) => handleInputChange(e, row.id, 'percentage')}
                      />
                    ) : (
                      row.percentage
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
                  {/* <CTableDataCell>
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
                          <i className="cil-pencil"></i>
                        </CButton>
                        <CButton color="danger" size="sm" onClick={() => handleDeleteClick(row.id)}>
                          <i className="cil-trash"></i>
                        </CButton>
                      </>
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
      station: 'TCS',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 2,
      station: 'Vishesh Patrolling',
      total: '0',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 3,
      station: 'Pachral',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 4,
      station: 'GHOSALE SCHOOL',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 5,
      station: 'Pevey JT',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 6,
      station: 'PEVE GAWTHAN',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 7,
      station: 'MHAPRAL POLICE CHECK POST',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 8,
      station: 'Yavatmal City',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 9,
      station: 'Khandala',
      total: '1',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 10,
      station: 'Vasantnagar',
      total: '0',
      day: '0',
      day1: '0',
      after: '0',
      even: '0',
      all: '0',
      officer: '0',
      percentage: '0%',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [dropdownValue, setDropdownValue] = useState('')
  const [inputValue, setInputValue] = useState('')
  const pageSize = 10

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      station: '',
      total: '',
      day: '',
      day1: '',
      after: '',
      even: '',
      all: '',
      officer: '',
      percentage: '',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    }
    setRows([...rows, newRow])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Night Patrolling Reports </strong>
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
            <CInputGroup className="p-1">
              <CInputGroupText>From Date</CInputGroupText>
              <CFormInput
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </CInputGroup>

            <CInputGroup className="p-1">
              <CInputGroupText>To Date</CInputGroupText>
              <CFormInput type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
            </CInputGroup>

            <CInputGroup className="p-1">
              <CInputGroupText>Police Station Name</CInputGroupText>
              <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CFormSelect>
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
