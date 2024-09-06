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
    row.stationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.policeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.criminalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.ci.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.ri.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.vi.toLowerCase().includes(searchQuery.toLowerCase()) ||
    // row.vl.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.dt.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Police Name</CTableHeaderCell>
                <CTableHeaderCell>Criminal Name</CTableHeaderCell>
                <CTableHeaderCell>Criminal Image</CTableHeaderCell>
                <CTableHeaderCell>Recent Image</CTableHeaderCell>
                <CTableHeaderCell>Verified Image</CTableHeaderCell>
                <CTableHeaderCell>Verified Location</CTableHeaderCell>
                <CTableHeaderCell>Date Time</CTableHeaderCell>
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
                        value={row.stationName}
                        onChange={(e) => handleInputChange(e, row.id, 'stationName')}
                      />
                    ) : (
                      row.stationName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.policeName}
                        onChange={(e) => handleInputChange(e, row.id, 'policeName')}
                      />
                    ) : (
                      row.policeName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.criminalName}
                        onChange={(e) => handleInputChange(e, row.id, 'criminalName')}
                      />
                    ) : (
                      row.criminalName
                    )}
                  </CTableDataCell>

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.location}
                        onChange={(e) => handleInputChange(e, row.id, 'location')}
                      />
                    ) : (
                      row.location
                    )}
                  </CTableDataCell> */}

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.scantime}
                        onChange={(e) => handleInputChange(e, row.id, 'scantime')}
                      />
                    ) : (
                      row.scantime
                    )}
                  </CTableDataCell> */}

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.scanlocation}
                        onChange={(e) => handleInputChange(e, row.id, 'scanlocation')}
                      />
                    ) : (
                      row.scanlocation
                    )}
                  </CTableDataCell> */}

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.ci}
                        onChange={(e) => handleInputChange(e, row.id, 'ci')}
                      />
                    ) : (
                      <>
                        {row.ci && (
                          <img
                            src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1725271852~exp=1725275452~hmac=c6cff51c8b70509d2d25131b776d91adb73ef04584c11d70e6446fab636de852&w=826'
                            // src={row.selfie}
                            alt="Selfie"
                            style={{ width: '100px', height: 'auto', objectFit: 'contain' }}
                          />
                        )}
                      </>
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.ri}
                        onChange={(e) => handleInputChange(e, row.id, 'ri')}
                      />
                    ) : (
                      <>
                        {row.ri && (
                          <img
                            src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1725271852~exp=1725275452~hmac=c6cff51c8b70509d2d25131b776d91adb73ef04584c11d70e6446fab636de852&w=826'
                            // src={row.selfie}
                            alt="Selfie"
                            style={{ width: '100px', height: 'auto', objectFit: 'contain' }}
                          />
                        )}
                      </>
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormSelect
                        value={row.vi}
                        onChange={(e) => handleInputChange(e, row.id, 'vi')}
                      >
                        <option value="Verified">Verified</option>
                        <option value="NotVerified">Not Verified</option>
                      </CFormSelect>
                    ) : (
                      <span
                        className={`badge bg-${row.vi === 'Verified' ? 'success' : 'danger'}`}
                      >
                        {row.vi}
                      </span>
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormSelect
                        value={row.vl}
                        onChange={(e) => handleInputChange(e, row.id, 'vl')}
                      >
                        <option value="Matched">Matched</option>
                        <option value="Notmatched">Not Matched</option>
                      </CFormSelect>
                    ) : (
                      <span
                        className={`badge bg-${row.vl === 'Matched' ? 'success' : 'danger'}`}
                      >
                        {row.vl}
                      </span>
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.dt}
                        onChange={(e) => handleInputChange(e, row.id, 'dt')}
                      />
                    ) : (
                      row.dt
                    )}
                  </CTableDataCell>

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
      stationName: 'MIDC',
      policeName: '	Sp sir',
      criminalName: 'Akash Prakash Khandesi',
      ci: 'DYSP BALLAPUR',
      ri: 'DYSP BALLAPUR',
      vi: 'Verified',
      vl: 'Matched',
      dt: '2022-03-04 11:57:26',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 2,
      stationName: 'MIDC',
      policeName: '	Sp sir',
      criminalName: 'Akash Prakash Khandesi',
      ci: 'DYSP BALLAPUR',
      ri: 'DYSP BALLAPUR',
      vi: 'Verified',
      vl: 'NotMatched',
      dt: '2022-03-04 11:57:26',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 3,
      stationName: 'MIDC',
      policeName: '	Sp sir',
      criminalName: 'Akash Prakash Khandesi',
      ci: 'DYSP BALLAPUR',
      ri: 'DYSP BALLAPUR',
      vi: 'NotVerified',
      vl: 'Matched',
      dt: '2022-03-04 11:57:26',
      // selfie: 'Images'
      // status: 'Active',
      // isEditing: false,
    },
    {
      id: 4,
      stationName: 'MIDC',
      policeName: '	Sp sir',
      criminalName: 'Akash Prakash Khandesi',
      ci: 'DYSP BALLAPUR',
      ri: 'DYSP BALLAPUR',
      vi: 'Verified',
      vl: 'Matched',
      dt: '2022-03-04 11:57:26',
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
  const pageSize = 5

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      stationName: '',
      policeName: '',
      criminalName: '',
      ci: '',
      ri: '',
      vi: 'Active',
      vl: 'Active',
      dt: '',
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
            <strong>Manage Criminal Verification</strong>
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
              <CInputGroupText>Police Station Name</CInputGroupText>
              <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CFormSelect>
            </CInputGroup>

            <CInputGroup className='p-1 '>
              {/* <CInputGroupText> */}
              <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                <option value="Criminal">Criminal Name</option>
                <option value="option1">Option1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CFormSelect>
              {/* </CInputGroupText> */}
            </CInputGroup>

            <CInputGroup className='p-1'>
              {/* <CInputGroupText> */}
              <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                <option value="Police">Police Name</option>
                <option value="option1">Option1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CFormSelect>
              {/* </CInputGroupText> */}
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
