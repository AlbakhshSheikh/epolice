/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const navItemStyle = {
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  fontSize: '14px', // Adjust font size if needed
}

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Manage Masters',
    to: '/manage-masters',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [

      {
        component: CNavItem,
        name: 'Manage States',
        to: '/managemasters/managestates/State',
      },
      {
        component: CNavItem,
        name: 'Manage Districts',
        to: '/managemasters/managedistricts/District',
      },
      {
        component: CNavItem,
        name: 'Manage Cities',
        to: '/managemasters/managecities/Cities',
      },
      {
        component: CNavItem,
        name: 'Manage SDPO',
        to: '/managemasters/managesdpo/Sdpo',
      },
      {
        component: CNavItem,
        name: 'Manage Crime',
        to: '/managemasters/managecrime/Mcrime',
      },
      {
        component: CNavItem,
        name: 'Checkpost/Nakabandi',
        to: '/managemasters/checkpost/Check',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Live Tracking',
    to: '/live-tracking',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Police Masters',
    to: '/policemasters',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Manage Police Station',
        to: '/policemasters/policestation',
      },
      {
        component: CNavItem,
        name: 'Police Designation',
        to: '/policemasters/policedesignation',
      },
      {
        component: CNavItem,
        name: 'Manage Police Eyes',
        to: '/policemasters/policeeyes',
      },
      {
        component: CNavItem,
        name: 'Vehicles',
        to: '/policemasters/vehicles',
      },
      {
        component: CNavItem,
        name: 'Sensitive Areas',
        to: '/policemasters/senstivearea',
      },
      {
        component: CNavItem,
        name: 'E-Office',
        to: '/policemasters/eoffice',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Tasks',
    to: '/tasks',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Police Tasks',
        to: '/tasks/managestation',
      },
      {
        component: CNavItem,
        name: 'Assigned Station Tasks',
        to: '/tasks/managepolice',
      },
      {
        component: CNavItem,
        name: 'Assigned Police Tasks',
        to: '/tasks/policetask',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Incidence Spot',
    to: '/incedencespot',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Manage Police Users',
    to: '/policeusers',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Criminals',
    to: '/criminal',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Patrolling Attendance',
    to: '/patrolling',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/reports',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Selfie Report',
        to: '/reports/selfie',
      },
      {
        component: CNavItem,
        name: 'Task Report',
        to: '/reports/task',
      },
      {
        component: CNavItem,
        name: 'Police Summary Report',
        to: '/reports/police',
      },
      {
        component: CNavItem,
        name: 'Night Patrolling',
        to: '/reports/night',
      },
      {
        component: CNavItem,
        name: 'Criminal Analysis',
        to: '/reports/analysis',
      },
      {
        component: CNavItem,
        name: 'Criminal Verification',
        to: '/reports/verification',
      },
      {
        component: CNavItem,
        name: 'Incidence Analysis',
        to: '/reports/incidence',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Police Stations Category',
    to: '/policestationscategory',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    style: navItemStyle,
  },
  {
    component: CNavItem,
    name: 'Police Stations Master',
    to: '/stationsmaster', 
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    style: navItemStyle,
  },
  {
    component: CNavItem,
    name: 'Mapping of Police Stations',
    to: '/mappingofpolicestations',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    style: navItemStyle,
  },
  {
    component: CNavItem,
    name: 'New Police Summary Report',
    to: '/newpolice',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    style: navItemStyle,
  },
  {
    component: CNavItem,
    name: 'Failed QR Report',
    to: '/failedqr',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
]

export default _nav
