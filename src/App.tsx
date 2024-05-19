import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './screens/Login';
import { UserScreen } from './screens/UserScreen';



function App() {

  return (


    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<UserScreen />} />

        </Routes>
      </Router>
  )
}

export default App
