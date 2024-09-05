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
    row.activity.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.stationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.fd.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.td.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.ap.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Activity</CTableHeaderCell>
                <CTableHeaderCell>Station Name</CTableHeaderCell>
                <CTableHeaderCell>From Date</CTableHeaderCell>
                <CTableHeaderCell>To Date</CTableHeaderCell>
                <CTableHeaderCell>Address</CTableHeaderCell>
                <CTableHeaderCell>Assign Police</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>

                {/* <CTableHeaderCell>C</CTableHeaderCell>
                <CTableHeaderCell>From Date</CTableHeaderCell>
                <CTableHeaderCell>To Date</CTableHeaderCell>
                <CTableHeaderCell>Address</CTableHeaderCell>
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
                        value={row.activity}
                        onChange={(e) => handleInputChange(e, row.id, 'activity')}
                      />
                    ) : (
                      row.activity
                    )}
                  </CTableDataCell>

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
                        value={row.fd}
                        onChange={(e) => handleInputChange(e, row.id, 'fd')}
                      />
                    ) : (
                      row.fd
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.td}
                        onChange={(e) => handleInputChange(e, row.id, 'td')}
                      />
                    ) : (
                      row.td
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
                        value={row.ap}
                        onChange={(e) => handleInputChange(e, row.id, 'ap')}
                      />
                    ) : (
                      row.ap
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
                      <CFormInput
                        value={row.city}
                        onChange={(e) => handleInputChange(e, row.id, 'city')}
                      />
                    ) : (
                      row.city
                    )}
                  </CTableDataCell> */}

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.fromdate}
                        onChange={(e) => handleInputChange(e, row.id, 'fromdate')}
                      />
                    ) : (
                      row.fromdate
                    )}
                  </CTableDataCell> */}

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.todate}
                        onChange={(e) => handleInputChange(e, row.id, 'todate')}
                      />
                    ) : (
                      row.todate
                    )}
                  </CTableDataCell> */}

                  {/* <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.address}
                        onChange={(e) => handleInputChange(e, row.id, 'address')}
                      />
                    ) : (
                      row.address
                    )}
                  </CTableDataCell> */}





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
      activity: 'NAKABANDI',
      stationName: 'Akot Rural',
      fd: '2021-12-31',
      td: '2022-01-01',
      address: 'Maharashtra',
      ap: 'GOPALSING NARSING DABERAO',
      isEditing: false,
      // status: 'Active',
      // city: 'Akola',
      // fromdate: 'ex',
      // todate: 'ex',
      // address: 'DYSP BALLAPUR',
    },
    {
      id: 2,
      activity: 'NAKABANDI',
      stationName: 'Akot Rural',
      fd: '2021-12-31',
      td: '2022-01-01',
      address: 'Maharashtra',
      ap: 'GOPALSING NARSING DABERAO',
      isEditing: false,
      // status: 'Active',
      // city: 'Akola',
      // fromdate: 'ex',
      // todate: 'ex',
      // address: 'DYSP BALLAPUR',
    },

  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      activity: '',
      stationName: '',
      fd: '',
      td: '',
      address: '',
      ap: '',
      status: 'Active',
      // city: 'Akola',
      // fromdate: 'ex',
      // todate: 'ex',
      // address: 'DYSP BALLAPUR',
      // isEditing: false,
    }
    setRows([...rows, newRow])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Manage Police Task</strong>
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
