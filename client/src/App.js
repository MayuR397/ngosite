import './App.css';
import { Home } from './components/Home';
import { Route ,Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { ResponsiveAppBar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/login' element={<Login/>}></Route>
       <Route path='/signUp' element={<SignUp/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
