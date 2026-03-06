import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Design_OTP_Page from '../public-site/pages/Design_OTP_Page'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Design_OTP_Page/>
    </BrowserRouter>
  )
}

export default App