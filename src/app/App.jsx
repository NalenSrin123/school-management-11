import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import ConfirmOTPpage from '../public-site/pages/ConfirmOTPpage'
import AddCourseForm from '../dashboard/pages/courses/AddcourseForm';

function App() {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      {/* <ConfirmOTPpage /> */}
      <AddCourseForm></AddCourseForm>
      </BrowserRouter>
   
  );
}

export default App;
