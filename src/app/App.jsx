import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import About from '../public-site/pages/About'

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <About/>
    </BrowserRouter>
  )
}

export default App