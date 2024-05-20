import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './screens/Login';
import { UserScreen } from './screens/UserScreen';
import { Unauthorized } from './screens/Unauthorized';



function App() {

  return (


    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<UserScreen />} />
          <Route path="/unauthorized" element={<Unauthorized />} />


        </Routes>
      </Router>
  )
}

export default App
