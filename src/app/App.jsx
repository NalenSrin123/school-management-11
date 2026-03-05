import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Login from '../services/Login'
function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <Login/>
    </BrowserRouter>
  )
}

export default App