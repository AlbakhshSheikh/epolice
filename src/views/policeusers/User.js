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

  const handleDeleteClick = (id) => {
    setRows((rows) => rows.filter((row) => row.id !== id))
  }

  const handleImageUpload = (e, rowId) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const updatedRows = rows.map((row) => {
          if (row.id === rowId) {
            return { ...row, image: reader.result }
          }
          return row
        })
        setRows(updatedRows)
      }
      reader.readAsDataURL(file) // Convert file to base64 URL
    }
  }
  

  // Filter rows based on search query
  const filteredRows = rows.filter(row =>
    row.stationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.policeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.buckalNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.image.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.gender.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Police Station Name</CTableHeaderCell>
                <CTableHeaderCell>Police Name</CTableHeaderCell>
                <CTableHeaderCell>Buckal Number</CTableHeaderCell>
                <CTableHeaderCell>Designation Type</CTableHeaderCell>
                <CTableHeaderCell>Images</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableHeaderCell>Mobile</CTableHeaderCell>
                <CTableHeaderCell>Gender</CTableHeaderCell>
                <CTableHeaderCell>Approved</CTableHeaderCell>
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
                        value={row.stationName}
                        placeholder='Station Name'
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
                        placeholder='Police Name'
                        onChange={(e) => handleInputChange(e, row.id, 'policeName')}
                      />
                    ) : (
                      row.policeName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.buckalNumber}
                        placeholder='Buckal Number'
                        onChange={(e) => handleInputChange(e, row.id, 'buckalNumber')}
                      />
                    ) : (
                      row.buckalNumber
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.designation}
                        placeholder='Designation'
                        onChange={(e) => handleInputChange(e, row.id, 'designation')}
                      />
                    ) : (
                      row.designation
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <>
                        <CFormInput
                          type="file"
                          accept="image/*"
                          placeholder='Images'
                          onChange={(e) => handleImageUpload(e, row.id)} // Handle file input
                        />
                      </>
                    ) : (
                      <>
                        {row.image && (
                          <img
                            src={row.image} // Display uploaded image
                            // src = 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1725271852~exp=1725275452~hmac=c6cff51c8b70509d2d25131b776d91adb73ef04584c11d70e6446fab636de852&w=826'
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
                        value={row.email}
                        placeholder='Email'
                        onChange={(e) => handleInputChange(e, row.id, 'email')}
                      />
                    ) : (
                      row.email
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.mobile}
                        placeholder='Mobile'
                        onChange={(e) => handleInputChange(e, row.id, 'mobile')}
                      />
                    ) : (
                      row.mobile
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.gender}
                        placeholder='Gender'
                        onChange={(e) => handleInputChange(e, row.id, 'gender')}
                      />
                    ) : (
                      row.gender
                    )}
                  </CTableDataCell>


                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormSelect
                        value={row.approved}
                        onChange={(e) => handleInputChange(e, row.id, 'approved')}
                      >
                        <option value="Approved">Approved</option>
                        <option value="Notapproved">Not Approved</option>
                      </CFormSelect>
                    ) : (
                      <span
                        className={`badge bg-${row.approved === 'Approved' ? 'success' : 'danger'}`}
                      >
                        {row.approved}
                      </span>
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
                      <CTooltip content = 'Save Change'>
                        <CButton color="success" size="sm" onClick={() => handleSaveClick(row.id)}>
                          Save
                        </CButton>
                        </CTooltip>

                        <CTooltip content = 'Delete'>
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
                        <CTooltip content = 'View'>
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilUser} />
                        </CButton>
                        </CTooltip>

                        <CTooltip content = 'Edit'>
                        <CButton
                          color="info"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <CIcon icon={cilPencil} />
                        </CButton>
                        </CTooltip>

                        <CTooltip content = 'Delete'>
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
      stationName: 'Maharashtra',
      policeName: 'Akola',
      buckalNumber: '123213',
      designation: 'Police',
      image: 'Images',
      email: 'DYSPBALLAPUR@gmail.com',
      mobile: '9876543210',
      gender: 'Male',
      approved: 'Approved',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 2,
      stationName: 'Maharashtra',
      policeName: 'Akola',
      buckalNumber: '123213',
      designation: 'Police',
      image: 'Images',
      email: 'DYSPBALLAPUR@gmail.com',
      mobile: '9876543210',
      gender: 'Male',
      approved: 'Approved',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 3,
      stationName: 'Maharashtra',
      policeName: 'Akola',
      buckalNumber: '123213',
      designation: 'Police',
      image: 'Images',
      email: 'DYSPBALLAPUR@gmail.com',
      mobile: '9876543210',
      gender: 'Male',
      approved: 'Approved',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 4,
      stationName: 'Maharashtra',
      policeName: 'Akola',
      buckalNumber: '123213',
      designation: 'Police',
      image: 'Images',
      email: 'DYSPBALLAPUR@gmail.com',
      mobile: '9876543210',
      gender: 'Male',
      approved: 'Notapproved',
      status: 'Active',
      isEditing: false,
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
      stationName: '',
      policeName: '',
      buckalNumber: '',
      designation: '',
      image: '',
      email: '',
      mobile: '',
      gender: '',
      approved: 'Approved',
      status: 'Active',
      isEditing: true, // Set isEditing to true so the new row is editable immediately
    }
    setRows([...rows, newRow])
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Manage Polices</strong>
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
              <CButton color="success" className="ms-2" onClick={handleAddRow}>
                Upload
              </CButton>
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
