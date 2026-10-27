import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Nav from './Nav';
import Home from './App';
import Calculator from './App1';
import Login from './App2';

const NavbarLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

function App3() {
  return (
    <Router>
      <Routes>
        <Route element = { <NavbarLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App3;
