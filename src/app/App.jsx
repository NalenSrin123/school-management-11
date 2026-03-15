import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import ConfirmOTPpage from '../public-site/pages/ConfirmOTPpage'

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <ConfirmOTPpage/>
      
    </BrowserRouter>
   
  );
}

export default App;
