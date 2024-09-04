import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
  CButton,
  CHeaderToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'
import EpoliceLogo from 'src/assets/brand/Epolice.png'
import { cilUser, cilMenu } from '@coreui/icons'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarHeader className="border-bottom d-flex justify-content-center">
        <CSidebarBrand to="/" className="d-flex align-items-center justify-content-center">
          <img src={EpoliceLogo} alt="Epolice Logo" style={{ height: '70px' }} />
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarFooter className="border-top d-none d-lg-flex flex-column align-items-center">
        <div className="d-flex align-items-center mb-2">
          <span className="fw-bold" style={{ fontSize: '25px' }}>
            Admin
          </span>
        </div>
        <CButton color="dark" className="w-100 text-start d-flex align-items-center">
          <div
            style={{
              border: '2px solid white',
              borderRadius: '6px',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              marginRight: '10px',
            }}
          >
            <CIcon icon={cilUser} />
          </div>
          <div>
            <span className="fw-bold">SP AKOLA</span>
            <br />
            <span className="text-muted">Head_Person</span>
          </div>
        </CButton>
      </CSidebarFooter>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginTop: 'auto', marginInlineStart: 'auto' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
