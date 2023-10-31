import { createBrowserRouter } from 'react-router-dom'
import { AboutUs, Home } from './containers'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
])
