import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import ConfoirmOTPpage from '../public-site/pages/ConfoirmOTPpage'

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <ConfoirmOTPpage/>
    </BrowserRouter>
  )
}

export default App