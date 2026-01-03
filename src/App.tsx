import { BrowserRouter } from "react-router";
import Menu from "./components/Menu";
import AppRoute from "./AppRoutes";
export default function App() {

  return (
    <>
    <BrowserRouter>
      <Menu />
        <div className="container">
          <AppRoute />        
        </div>
    </BrowserRouter>
    
    </>
  )
}


