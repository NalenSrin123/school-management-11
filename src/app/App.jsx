import { BrowserRouter } from "react-router-dom";
import Create_logo from "../dashboard/layout/Create_logo";
// import List_logo from "../dashboard/layout/List_logo";

function App() {
  return (
    <BrowserRouter>
      {/* <List_logo /> */}
      <Create_logo/>
      
    </BrowserRouter>
  );
}

export default App;