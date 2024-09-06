/* eslint-disable prettier/prettier */
import { element } from 'prop-types'
import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Check = React.lazy(() => import('./views/managemasters/checkpost/Check'))
const Sdpo = React.lazy(() => import('./views/managemasters/managesdpo/Sdpo'))
const Mcrime = React.lazy(() => import('./views/managemasters/managecrime/Mcrime'))

// PoliceMasters
const Station = React.lazy(() => import('./views/policemasters/policestation/Station'))
const Designation = React.lazy(() => import('./views/policemasters/policedesignation/Designation'))
const Eyes = React.lazy(() => import('./views/policemasters/policeeyes/Eye'))
const Off = React.lazy(() => import('./views/policemasters/eoffice/Off'))
const Sens = React.lazy(() => import('./views/policemasters/senstivearea/Sens'))
const Vehicle = React.lazy(() => import('./views/policemasters/vehicles/Vehicle'))

// Tasks
const Stationmanages = React.lazy(() => import('./views/tasks/managestation/Stationmanages'))
const Taskmanages = React.lazy(() => import('./views/tasks/managepolice/Taskmanages'))
const Managepolice = React.lazy(() => import('./views/tasks/policetask/Managepolice'))

//Incedence Spot
const Spot = React.lazy(() => import('./views/base/incedencespot/Spot'))
//Manage Police User
const User = React.lazy(() => import('./views/policeusers/User'))
const Cri = React.lazy(() => import('./views/criminal/Cri'))
const Patrol = React.lazy(() => import('./views/patrolling/Patrol'))

// Reports
const Pics = React.lazy(() => import('./views/reports/selfie/Pics'))
const Assign = React.lazy(() => import('./views/reports/task/Assign'))
const Pol = React.lazy(() => import('./views/reports/police/Pol'))
const Policenight = React.lazy(() => import('./views/reports/night/Policenight'))
const CrimeAna = React.lazy(() => import("./views/reports/analysis/CrimeAna"))
const Crime = React.lazy(() => import('./views/reports/verification/Crime'))
const Anlinc = React.lazy(() => import('./views/reports/incidence/Anlinc'))

const Policesum = React.lazy(() => import('./views/newpolice/Policesum'))
const Failedqr = React.lazy(() => import('./views/failedqr/Failedqr'))

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))



// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))

const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Mars = React.lazy(() => import('./views/base/manges/Mars'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))


// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/managemasters/checkpost/Check', name: 'CheckPost', element: Check },
  { path: '/managemasters/managesdpo/Sdpo', name: 'Manage SDPO', element: Sdpo },
  { path: '/managemasters/managecrime/Mcrime', name: 'Manage Crime', element: Mcrime },

  // Policemaster.
  { path: '/policemasters/policestation', name: 'Manage Police Station', element: Station },
  { path: '/policemasters/policedesignation', name: 'Police Designation', element: Designation },
  { path: '/policemasters/policeeyes', name: 'Manage Police Eyes', element: Eyes },
  { path: '/policemasters/vehicles', name: 'Vehicles', element: Vehicle },
  { path: '/policemasters/senstivearea', name: 'Senstive Areas', element: Sens },
  { path: '/policemasters/eoffice', name: 'E-Office', element: Off },

  // Managestation
  { path: '/tasks/managestation', name: 'Manage Police Tasks', element: Stationmanages },
  { path: '/tasks/managepolice', name: 'Manage Assigned Station Task', element: Taskmanages },
  { path: '/tasks/policetask', name: 'Manage Police Task', element: Managepolice },
  { path: '/policeusers', name: 'Manage Polices ', element: User },

  { path: '/incedencespot', name: 'Incidence Spot', element: Spot },
  { path: '/criminal', name: 'Manage Criminals', element: Cri },
  { path: '/patrolling', name: 'Patrol', element: Patrol },

  //Reports 
  { path: '/reports/selfie', name: 'Selfie Report', element: Pics },
  { path: '/reports/task', name: 'Task Report', element: Assign },
  { path: '/reports/police', name: 'Manage Police Summary Report', element: Pol },
  { path: '/reports/night', name: 'Manage Night Patrolling Report', element: Policenight },
  { path: '/reports/analysis', name: 'Criminal Analysis', element: CrimeAna },
  { path: '/reports/verification', name: 'Criminal Verification', element: Crime },
  { path: '/reports/incidence', name: 'Incidence Analysis', element: Anlinc },

  
  { path: '/newpolice', name: 'Mapping of Police Stations', element: Policesum },
  { path: '/failedqr', name: 'Failed QR Report', element: Failedqr },

  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },

  

 
 
  



 

  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/manges', name: 'Mars', element: Mars },
  // Policemaster.
  { path: '/base/policemasters/policestation', name: 'Station', element: Station },
  { path: '/base/policemasters/policedesignation', name: 'Designation', element: Designation },
  { path: '/base/policemasters/eoffice', name: 'Off', element: Off },
  { path: '/base/policemasters/policeeyes', name: 'Eyes', element: Eyes },
  { path: '/base/policemasters/senstivearea', name: 'Sens', element: Sens },
  { path: '/base/policemasters/vehicles', name: 'Vehicle', element: Vehicle },
  // Managestation
  { path: '/base/tasks/managestation', name: 'Stationmanages', element: Stationmanages },
  { path: '/base/tasks/managepolice', name: 'Taskmanages', element: Taskmanages },
  { path: '/base/tasks/policetask', name: 'Managepolice', element: Managepolice },
  //Reports 
  { path: '/base/reports/analysis', name: 'CrimeAna', element: CrimeAna },
  { path: '/base/reports/incidence', name: 'Anlinc', element: Anlinc },
  { path: '/base/reports/night', name: 'Policenight', element: Policenight },
  { path: '/base/reports/police', name: 'Pol', element: Pol },
  { path: '/base/reports/selfie', name: 'Pics', element: Pics },
  { path: '/base/reports/task', name: 'Assign', element: Assign },
  { path: '/base/reports/verification', name: 'Crime', element: Crime },

  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
