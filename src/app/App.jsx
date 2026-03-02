import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Reset_password from '../public-site/pages/Reset_password'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Reset_password />
    </BrowserRouter>
  )
}

export default App