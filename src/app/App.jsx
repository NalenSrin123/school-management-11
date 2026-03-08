import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Courses from '../public-site/pages/Courses'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Courses/>
    </BrowserRouter>
  );
}

export default App;