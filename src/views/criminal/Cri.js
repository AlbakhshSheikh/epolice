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
  CTooltip,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilSearch, cilSettings, cilTrash, cilUser, cilPencil, cilPlus } from '@coreui/icons'

const CustomStyles1 = ({ rows, setRows, searchQuery, currentPage, pageSize, setCurrentPage }) => {
  const handleEditClick = (id) => {
    setRows(rows.map((row) =>
      row.id === id ? { ...row, isEditing: !row.isEditing } : row
    ));
  }

  const handleSaveClick = (id) => {
    setRows(rows.map((row) =>
      row.id === id ? { ...row, isEditing: false } : row
    ));
  }

  const handleInputChange = (e, id, field) => {
    const value = e.target.value;
    setRows(rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    ));
  }

  const handleDeleteClick = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  }

  // Filter rows based on search query
  const filteredRows = rows.filter(row =>
    row.stationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.criminalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.mobile.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate rows
  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <CForm className="row g-3 needs-validation" noValidate>
        <CCol xs={12} className="mt-4">
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                <CTableHeaderCell>Police Station</CTableHeaderCell>
                <CTableHeaderCell>Criminal Name</CTableHeaderCell>
                <CTableHeaderCell>Mobile</CTableHeaderCell>
                <CTableHeaderCell>Address</CTableHeaderCell>
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
                        placeholder="Enter police station"
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
                        placeholder="Enter criminal name"
                        value={row.criminalName}
                        onChange={(e) => handleInputChange(e, row.id, 'criminalName')}
                      />
                    ) : (
                      row.criminalName
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        placeholder="Enter mobile number"
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
                        placeholder="Enter address"
                        value={row.address}
                        onChange={(e) => handleInputChange(e, row.id, 'address')}
                      />
                    ) : (
                      row.address
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
                        <CTooltip content='View'>
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilUser} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content='Add'>
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilPlus} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content='Edit'>
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilPencil} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content='Delete'>
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
    );
  };
  

  const Validation = () => {
    const [rows, setRows] = useState([
      {
        id: 1,
        stationName: 'Maharashtra',
        criminalName: 'Alok',
        mobile: '9876543210',
        address: 'BALLAPUR',
        status: 'Active',
        isEditing: false,
      },
      {
        id: 2,
        stationName: 'Maharashtra',
        criminalName: 'Alok',
        mobile: '9876543210',
        address: 'BALLAPUR',
        status: 'Active',
        isEditing: false,
      },
      {
        id: 3,
        stationName: 'Maharashtra',
        criminalName: 'Alok',
        mobile: '9876543210',
        address: 'BALLAPUR',
        status: 'Active',
        isEditing: false,
      },
      {
        id: 4,
        stationName: 'Maharashtra',
        criminalName: 'Alok',
        mobile: '9876543210',
        address: 'BALLAPUR',
        status: 'Active',
        isEditing: false,
      },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cityValue, setCityValue] = useState('');
    const [policeStationValue, setPoliceStationValue] = useState('');
    const pageSize = 10;

    const handleAddRow = () => {
      const newRow = {
        id: rows.length + 1,
        stationName: '',
        criminalName: '',
        mobile: '',
        address: '',
        status: 'Active',
        isEditing: false,
      }
      setRows([...rows, newRow]);
    }

    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader className="d-flex justify-content-between align-items-center">
              <strong>Manage Selfie Report</strong>
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

            <CCardHeader className="d-flex p-2">
              <CInputGroup className='p-1'>
                <CInputGroupText>City</CInputGroupText>
                <CFormSelect value={cityValue} onChange={(e) => setCityValue(e.target.value)}>
                  <option value="">Select city</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </CFormSelect>
              </CInputGroup>

              <CInputGroup className='p-1'>
                <CInputGroupText>Police Station</CInputGroupText>
                <CFormSelect value={policeStationValue} onChange={(e) => setPoliceStationValue(e.target.value)}>
                  <option value="">Select police station</option>
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
    );
  }

  export default Validation
