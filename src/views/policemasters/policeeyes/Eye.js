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
  CTooltip, // Import CTooltip
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
    row.policeStationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.cameraDescription.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Police Station</CTableHeaderCell>
                <CTableHeaderCell>State</CTableHeaderCell>
                <CTableHeaderCell>District</CTableHeaderCell>
                <CTableHeaderCell>City</CTableHeaderCell>
                <CTableHeaderCell>Address</CTableHeaderCell>
                <CTableHeaderCell>Camera Description</CTableHeaderCell>
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
                        value={row.policeStationName}
                        onChange={(e) => handleInputChange(e, row.id, 'policeStationName')}
                        placeholder='Police Station '
                      />
                    ) : (
                      row.policeStationName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.state}
                        onChange={(e) => handleInputChange(e, row.id, 'state')}
                        placeholder='State'
                      />
                    ) : (
                      row.state
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.district}
                        onChange={(e) => handleInputChange(e, row.id, 'district')}
                        placeholder='District'
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
                        placeholder='City'
                      />
                    ) : (
                      row.city
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.address}
                        onChange={(e) => handleInputChange(e, row.id, 'address')}
                        placeholder='Address'
                      />
                    ) : (
                      row.address
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.cameraDescription}
                        onChange={(e) => handleInputChange(e, row.id, 'cameraDescription')}
                        placeholder='Camera Description'
                      />
                    ) : (
                      row.cameraDescription
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
                        <CTooltip content="Save changes" placement="top">
                          <CButton color="success" size="sm" onClick={() => handleSaveClick(row.id)}>
                            Save
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Delete" placement="top">
                          <CButton
                            color="danger"
                            size="sm"
                            className="ms-2"
                            onClick={() => handleDeleteClick(row.id)}
                          >
                            Delete
                          </CButton>
                        </CTooltip>
                      </>
                    ) : (
                      <>
                        <CTooltip content="View" placement="top">
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilUser} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Edit" placement="top">
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilPencil} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Delete" placement="top">
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
      policeStationName: 'Station 1',
      email: 'station1@example.com',
      mobile: '1234567890',
      state: 'Maharashtra',
      district: 'Akola',
      city: 'Akola',
      address: 'Address 1',
      cameraDescription: 'Camera Description 1',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 2,
      policeStationName: 'Station 2',
      email: 'station2@example.com',
      mobile: '0987654321',
      state: 'Maharashtra',
      district: 'Nagpur',
      city: 'Nagpur',
      address: 'Address 2',
      cameraDescription: 'Camera Description 2',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 3,
      policeStationName: 'Station 3',
      email: 'station3@example.com',
      mobile: '1122334455',
      state: 'Gujarat',
      district: 'Ahmedabad',
      city: 'Ahmedabad',
      address: 'Address 3',
      cameraDescription: 'Camera Description 3',
      status: 'Inactive',
      isEditing: false,
    },
    {
      id: 4,
      policeStationName: 'Station 4',
      email: 'station4@example.com',
      mobile: '5566778899',
      state: 'Karnataka',
      district: 'Bangalore',
      city: 'Bangalore',
      address: 'Address 4',
      cameraDescription: 'Camera Description 4',
      status: 'Active',
      isEditing: false,
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      policeStationName: '',
      email: '',
      mobile: '',
      state: '',
      district: '',
      city: '',
      address: '',
      cameraDescription: '',
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
            <strong>Manage Police Eyes</strong>
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
