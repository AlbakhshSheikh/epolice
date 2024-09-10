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
    row.policeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.attendance.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.in.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.out.toLowerCase().includes(searchQuery.toLowerCase()),
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
                <CTableHeaderCell>Police Name</CTableHeaderCell>
                <CTableHeaderCell>Attendance Date</CTableHeaderCell>
                <CTableHeaderCell>In Time</CTableHeaderCell>
                <CTableHeaderCell>Out Time</CTableHeaderCell>
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
                        value={row.attendance}
                        onChange={(e) => handleInputChange(e, row.id, 'attendance')}
                      />
                    ) : (
                      row.attendance
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.in}
                        onChange={(e) => handleInputChange(e, row.id, 'in')}
                      />
                    ) : (
                      row.in
                    )}
                  </CTableDataCell>

                  <CTableDataCell>
                    {row.isEditing ? (
                      <CFormInput
                        value={row.out}
                        onChange={(e) => handleInputChange(e, row.id, 'out')}
                      />
                    ) : (
                      row.out
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
      policeName: 'Sachin yermekar',
      attendance: '10-09-2024',
      in: '12:38 PM',
      out: '12:38 PM',
    },
    {
      id: 2,
      policeName: 'Sachin yermekar',
      attendance: '10-09-2024',
      in: '12:38 PM',
      out: '12:38 PM',
    },
    {
      id: 3,
      policeName: 'Sachin yermekar',
      attendance: '10-09-2024',
      in: '12:38 PM',
      out: '12:38 PM',
    },
    {
      id: 4,
      policeName: 'Sachin yermekar',
      attendance: '10-09-2024',
      in: '12:38 PM',
      out: '12:38 PM',
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
      policeName: '',
      attendance: '',
      in: '',
      out: '',
    }
    setRows([...rows, newRow])
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <strong>Patrolling Attendance</strong>
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
              <CInputGroupText>From Date</CInputGroupText>
              <CFormInput
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>To Date</CInputGroupText>
              <CFormInput
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>Police Station Name</CInputGroupText>
              <CFormSelect value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </CFormSelect>
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>Police Name</CInputGroupText>
              <CFormInput
                placeholder="Enter text..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </CInputGroup>

            <CInputGroup className='p-1'>
              <CInputGroupText>Police Designation</CInputGroupText>
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
