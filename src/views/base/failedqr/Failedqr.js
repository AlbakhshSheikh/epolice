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
import { cilSearch, cilSettings, cilPencil, cilTrash } from '@coreui/icons'

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
    row.policeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.qr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.latLong.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.inputLatLong.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.dist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.station.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.city.toLowerCase().includes(searchQuery.toLowerCase())
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
                <CTableHeaderCell>Sr.</CTableHeaderCell>
                <CTableHeaderCell>Police Name</CTableHeaderCell>
                <CTableHeaderCell>Mobile</CTableHeaderCell>
                <CTableHeaderCell>QR</CTableHeaderCell>
                <CTableHeaderCell>Lat/Long</CTableHeaderCell>
                <CTableHeaderCell>Input Lat/Long</CTableHeaderCell>
                <CTableHeaderCell>Dist.</CTableHeaderCell>
                <CTableHeaderCell>Date</CTableHeaderCell>
                <CTableHeaderCell>Station</CTableHeaderCell>
                <CTableHeaderCell>District</CTableHeaderCell>
                <CTableHeaderCell>City</CTableHeaderCell>
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
                        value={row.mobile}
                        onChange={(e) => handleInputChange(e, row.id, 'mobile')}
                      />
                    ) : (
                      row.mobile
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.qr}
                        onChange={(e) => handleInputChange(e, row.id, 'qr')}
                      />
                    ) : (
                      row.qr
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.latLong}
                        onChange={(e) => handleInputChange(e, row.id, 'latLong')}
                      />
                    ) : (
                      row.latLong
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.inputLatLong}
                        onChange={(e) => handleInputChange(e, row.id, 'inputLatLong')}
                      />
                    ) : (
                      row.inputLatLong
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.dist}
                        onChange={(e) => handleInputChange(e, row.id, 'dist')}
                      />
                    ) : (
                      row.dist
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
                        value={row.district}
                        onChange={(e) => handleInputChange(e, row.id, 'district')}
                      />
                    ) : (
                      row.district
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.city}
                        onChange={(e) => handleInputChange(e, row.id, 'city')}
                      />
                    ) : (
                      row.city
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
      policeName: 'John Doe',
      mobile: '123-456-7890',
      qr: 'ABC123',
      latLong: '12.3456, 78.9012',
      inputLatLong: '',
      dist: '10 km',
      date: '2024-09-01',
      station: 'Main Station',
      district: 'Central',
      city: 'Metropolis',
      isEditing: false,
    },
    // Add more sample data as needed
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      policeName: '',
      mobile: '',
      qr: '',
      latLong: '',
      inputLatLong: '',
      dist: '',
      date: '',
      station: '',
      district: '',
      city: '',
      isEditing: true,
    }
    setRows([...rows, newRow])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Manage Police Records</strong>
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

