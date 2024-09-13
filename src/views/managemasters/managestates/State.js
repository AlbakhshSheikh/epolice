/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilSearch, cilSettings, cilPencil, cilTrash } from '@coreui/icons';

const CustomStyles1 = ({ rows, setRows, searchQuery, currentPage, pageSize, setCurrentPage }) => {
  const handleEditClick = (id) => {
    setRows((rows) =>
      rows.map((row) => (row.id === id ? { ...row, isEditing: !row.isEditing } : row)),
    );
  };
    );
  };

  const handleSaveClick = (id) => {
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, isEditing: false } : row)));
  };
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, isEditing: false } : row)));
  };

  const handleInputChange = (e, id, field) => {
    const value = e.target.value;
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };
    const value = e.target.value;
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleDeleteClick = (id) => {
    setRows((rows) => rows.filter((row) => row.id !== id));
  };
    setRows((rows) => rows.filter((row) => row.id !== id));
  };

  // Filter rows based on search query
  const filteredRows = rows.filter(row =>
    row.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.state.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Paginate rows
  const totalPages = Math.ceil(filteredRows.length / pageSize);
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <CForm className="row g-3 needs-validation" noValidate>
        {/* Table */}
        <CCol xs={12} className="mt-4">
          <CTable bordered>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Sr.No</CTableHeaderCell>
                <CTableHeaderCell>Country Name</CTableHeaderCell>
                <CTableHeaderCell>State Name</CTableHeaderCell>
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
                        value={row.country}
                        placeholder="Enter country name"
                        placeholder="Enter country name"
                        onChange={(e) => handleInputChange(e, row.id, 'country')}
                      />
                    ) : (
                      row.country
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.state}
                        placeholder="Enter state name"
                        placeholder="Enter state name"
                        onChange={(e) => handleInputChange(e, row.id, 'state')}
                      />
                    ) : (
                      row.state
                    )}
                  </CTableDataCell>
                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormSelect
                        value={row.status}
                        onChange={(e) => handleInputChange(e, row.id, 'status')}
                      >
                        <option value="" disabled>Select status</option>
                        <option value="" disabled>Select status</option>
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
                        <CTooltip content="Save changes">
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
                        <CTooltip content="Save changes">
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
                        <CTooltip content="Edit">
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilPencil} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Delete">
                          <CButton color="danger" size="sm" onClick={() => handleDeleteClick(row.id)}>
                            <CIcon icon={cilTrash} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Edit">
                          <CButton
                            color="info"
                            size="sm"
                            className="me-2"
                            onClick={() => handleEditClick(row.id)}
                          >
                            <CIcon icon={cilPencil} />
                          </CButton>
                        </CTooltip>
                        <CTooltip content="Delete">
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
          <CDropdownItem onClick={handlePDFDownload}>PDF</CDropdownItem>
          <CDropdownItem onClick={handleCopyTable}>Copy</CDropdownItem>
          <CDropdownItem onClick={handleExcelDownload}>Excel</CDropdownItem>
          <CDropdownItem onClick={handlePrint}>Print</CDropdownItem>
          <CDropdownItem>Show 50 rows</CDropdownItem>
          <CDropdownItem>Column visibility</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  );
};
  );
};

const Validation = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 2,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 3,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 4,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 5,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [serialCounter, setSerialCounter] = useState(rows.length); // Initialize with the number of rows
  const pageSize = 10;

  const handleAddRow = () => {
    const newSerial = serialCounter + 1;
    setSerialCounter(newSerial); // Update serial counter

    const newSerial = serialCounter + 1;
    setSerialCounter(newSerial); // Update serial counter

    const newRow = {
      id: newSerial,
      id: newSerial,
      country: '',
      state: '',
      status: 'Active',
      isEditing: true, // Start editing immediately after adding
    };
    setRows([...rows, newRow]);
  };
      isEditing: true, // Start editing immediately after adding
    };
    setRows([...rows, newRow]);
  };

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Manage State</strong>
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
  );
};
  );
};

export default Validation;