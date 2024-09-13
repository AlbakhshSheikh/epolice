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
  CTooltip,
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

  const handleFileChange = (e, id) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setRows((rows) =>
          rows.map((row) =>
            row.id === id ? { ...row, vehicleImage: reader.result, isEditing: false } : row
          ),
        )
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDeleteClick = (id) => {
    setRows((rows) => rows.filter((row) => row.id !== id))
  }

  // Filter rows based on search query
  const filteredRows = rows.filter(row =>
    row.policeStationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.vehicleName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.vehicleNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Police Station Name</CTableHeaderCell>
                <CTableHeaderCell>Vehicle Image</CTableHeaderCell>
                <CTableHeaderCell>Vehicle Name</CTableHeaderCell>
                <CTableHeaderCell>Vehicle No</CTableHeaderCell>
                <CTableHeaderCell>Vehicle Type</CTableHeaderCell>
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
                        placeholder='Police Station Name'
                      />
                    ) : (
                      row.policeStationName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <>
                        <CFormInput
                          type="file"
                          onChange={(e) => handleFileChange(e, row.id)}
                        />
                        {row.vehicleImage && (
                          <img src={row.vehicleImage} alt="Vehicle" style={{ width: '50px', height: '50px' }} />
                        )}
                      </>
                    ) : (
                      <img src={row.vehicleImage} alt="Vehicle" style={{ width: '50px', height: '50px' }} />
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.vehicleName}
                        onChange={(e) => handleInputChange(e, row.id, 'vehicleName')}
                        placeholder='Vehicle Name'
                      />
                    ) : (
                      row.vehicleName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.vehicleNo}
                        onChange={(e) => handleInputChange(e, row.id, 'vehicleNo')}
                        placeholder='Vehicle Number'
                      />
                    ) : (
                      row.vehicleNo
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.vehicleType}
                        onChange={(e) => handleInputChange(e, row.id, 'vehicleType')}
                        placeholder='Vehicle Type'
                      />
                    ) : (
                      row.vehicleType
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
                        <CTooltip content = "Save changes">
                        <CButton color="success" size="sm" onClick={() => handleSaveClick(row.id)}>
                          Save
                        </CButton>
                        </CTooltip>

                        <CTooltip content="Delete">
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
                      <CTooltip content = "View">
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilUser} />
                        </CButton>
                        </CTooltip>

                        <CTooltip content = "Edit">
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilPencil} />
                        </CButton>
                        </CTooltip>
                        
                        <CTooltip content = "Delete">
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
      vehicleImage: 'https://via.placeholder.com/50',
      vehicleName: 'Vehicle 1',
      vehicleNo: 'ABC123',
      vehicleType: 'Type 1',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 2,
      policeStationName: 'Station 2',
      vehicleImage: 'https://via.placeholder.com/50',
      vehicleName: 'Vehicle 2',
      vehicleNo: 'XYZ789',
      vehicleType: 'Type 2',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 3,
      policeStationName: 'Station 3',
      vehicleImage: 'https://via.placeholder.com/50',
      vehicleName: 'Vehicle 3',
      vehicleNo: 'LMN456',
      vehicleType: 'Type 3',
      status: 'Inactive',
      isEditing: false,
    },
    {
      id: 4,
      policeStationName: 'Station 4',
      vehicleImage: 'https://via.placeholder.com/50',
      vehicleName: 'Vehicle 4',
      vehicleNo: 'PQR123',
      vehicleType: 'Type 4',
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
      vehicleImage: '',
      vehicleName: '',
      vehicleNo: '',
      vehicleType: '',
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
            <strong>Manage Vehicles</strong>
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
