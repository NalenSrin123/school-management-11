import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <h1 className='text-amber-200'>Hello World</h1>
    </BrowserRouter>
  )
}

export default App