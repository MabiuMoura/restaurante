import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from "./styles/themes/global"

function App() {

  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
         <GlobalStyles />
          <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
