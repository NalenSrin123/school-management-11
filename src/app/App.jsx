import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ResetPassword from "../public-site/pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <ResetPassword />
    </BrowserRouter>
  );
}

export default App;