import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ResetPassword from "../public-site/pages/ResetPassword";
import Reset_password from "../public-site/pages/Reset_password";

function App() {
  return (
    <BrowserRouter>
      <ResetPassword />
      <Reset_password />
    </BrowserRouter>
  );
}

export default App;