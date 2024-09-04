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
    component: CNavItem,
    name: 'Live Tracking',
    to: '/live-tracking',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Checkpost/Nakabandi',
    to: '/forms/validation',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Manage Masters',
    to: '/manage-masters',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Manage Sdpo',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Manage Crime',
        to: '/base/manges',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Police Masters',
    to: '/police-masters',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Manage Police Station',
        to: '/base/policemasters/policestation',
      },
      {
        component: CNavItem,
        name: 'Police Designation',
        to: '/base/policemasters/policedesignation',
      },
      {
        component: CNavItem,
        name: 'Manage Police Eyes',
        to: '/base/policemasters/policeeyes',
      },
      {
        component: CNavItem,
        name: 'Vehicles',
        to: '/base/policemasters/vehicles',
      },
      {
        component: CNavItem,
        name: 'Sensitive Areas',
        to: '/base/policemasters/senstivearea',
      },
      {
        component: CNavItem,
        name: 'E-Office',
        to: '/base/policemasters/eoffice',
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
        to: '/base/tasks/managestation',
      },
      {
        component: CNavItem,
        name: 'Assigned Station Tasks',
        to: '/base/tasks/managepolice',
      },
      {
        component: CNavItem,
        name: 'Assigned Police Tasks',
        to: '/base/tasks/policetask',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Incidence Spot',
    to: '/base/incedencespot',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Manage Police Users',
    to: '/base/policeusers',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Criminals',
    to: '/base/criminal',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Patrolling Attendance',
    to: '/base/patrolling',
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
        to: '/base/reports/selfie',
      },
      {
        component: CNavItem,
        name: 'Task Report',
        to: '/base/reports/task',
      },
      {
        component: CNavItem,
        name: 'Police Summary Report',
        to: '/base/reports/police',
      },
      {
        component: CNavItem,
        name: 'Night Patrolling',
        to: '/base/reports/night',
      },
      {
        component: CNavItem,
        name: 'Criminal Analysis',
        to: '/base/reports/analysis',
      },
      { 
        component: CNavItem,
        name: 'Criminal Verification',
        to: '/base/reports/verification',
      },
      {
        component: CNavItem,
        name: 'Incidence Analysis',
        to: '/base/reports/incidence',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'New Police Summary Report',
    to: '/base/newpolice',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    style: navItemStyle,
  },
  {
    component: CNavItem,
    name: 'Failed QR Report',
    to: '/base/failedqr',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
]

export default _nav
