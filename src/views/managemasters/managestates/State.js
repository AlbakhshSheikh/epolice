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
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import * as XLSX from 'xlsx'

const CustomStyles1 = ({ rows, setRows, searchQuery, currentPage, pageSize, setCurrentPage }) => {
  const handleEditClick = (id) => {
    setRows((rows) =>
      rows.map((row) => (row.id === id ? { ...row, isEditing: !row.isEditing } : row)),
    );
  };

  const handleSaveClick = (id) => {
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, isEditing: false } : row)));
  };

  const handleInputChange = (e, id, field) => {
    const value = e.target.value;
    setRows((rows) => rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const handleDeleteClick = (id) => {
    setRows((rows) => rows.filter((row) => row.id !== id));
  };

  // Filter rows based on search query
  const filteredRows = rows.filter(row =>
      row.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.state.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Paginate rows
  const totalPages = Math.ceil(filteredRows.length / pageSize)
  const paginatedRows = filteredRows.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  // PDF generation functionality
  const handlePDFDownload = () => {
    const doc = new jsPDF()

    doc.text('State Management Table', 20, 10)

    const tableColumn = ['Sr.No', 'Country Name', 'State Name', 'Status']
    const tableRows = filteredRows.map((row) => [row.id, row.country, row.state, row.status])

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    })

    doc.save('state_management_table.pdf')
  }

  // Copy functionality to copy the table content
  const handleCopyTable = () => {
    let tableText = 'Sr.No\tCountry Name\tState Name\tStatus\n'

    filteredRows.forEach((row) => {
      tableText += `${row.id}\t${row.country}\t${row.state}\t${row.status}\n`
    })

    navigator.clipboard
      .writeText(tableText)
      .then(() => {
        alert('Table copied to clipboard!')
      })
      .catch((err) => {
        console.error('Error copying table: ', err)
      })
  }

  // Excel export functionality
  const handleExcelDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      filteredRows.map((row) => ({
        'Sr.No': row.id,
        'Country Name': row.country,
        'State Name': row.state,
        Status: row.status,
      })),
    )

    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'States')

    XLSX.writeFile(workbook, 'state_management_table.xlsx')
  }

  // Print functionality
  const handlePrint = () => {
    // Create a new window for print preview
    const printWindow = window.open('', '', 'height=600,width=800')

    printWindow.document.write('<html><head><title>Print</title>')
    printWindow.document.write(
      '<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid black; padding: 8px; text-align: left; }</style>',
    )
    printWindow.document.write('</head><body>')

    // Add table HTML
    printWindow.document.write('<table>')
    printWindow.document.write(
      '<thead><tr><th>Sr.No</th><th>Country Name</th><th>State Name</th><th>Status</th></tr></thead>',
    )
    printWindow.document.write('<tbody>')
    filteredRows.forEach(row => {
      printWindow.document.write(
        `<tr><td>${row.id}</td><td>${row.country}</td><td>${row.state}</td><td>${row.status}</td></tr>`
      )
    })
    printWindow.document.write('</tbody></table>')

    printWindow.document.write('</body></html>')

    printWindow.document.close() // Close the document for printing
    printWindow.focus() // Focus on the print window
    printWindow.print() // Trigger the print dialog
  }

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
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
    {
      id: 1,
      country: 'India',
      state: 'Maharashtra',
      status: 'Active',
      isEditing: false,
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  const handleAddRow = () => {
    const newSerial = serialCounter + 1;
    setSerialCounter(newSerial); // Update serial counter

    const newRow = {
      id: newSerial,
      country: '',
      state: '',
      status: 'Active',
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

export default Validation;
