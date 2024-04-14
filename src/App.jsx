import {Outlet} from 'react-router-dom'
import { Navbar } from './Components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Main/> */}
      <Outlet/>
    </div>
  )
}

export default App