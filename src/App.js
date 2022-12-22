import Signin from './components/Signin';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './components/Welcome';

function App() {

  const [userData, setUserData] = useState([]);
  const getData = (childData) => {
    setUserData([...userData, childData])
  }
  const handleSignOut = () => {
    setUserData('')
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div className='navbar'>
          <Link to='/'><button className='submit-btn'>Signin</button></Link>
          <Link to='/signup'><button className='submit-btn'>Signup</button></Link>
          <Link to='/'><button className='submit-btn' onClick={handleSignOut}>Signout</button></Link>
        </div>
        <Routes>
          <Route path='/' element={<Signin getData={userData} />}></Route>
          <Route path='/signup' element={<Signup getData={getData} />}></Route>
          <Route path='/welcome' element={<Welcome getData={userData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;