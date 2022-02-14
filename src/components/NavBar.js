import { Navbar } from 'react-bootstrap';

import './NavBar.css'

const NavBar = () => {
    return (
        <div>
          <Navbar bg="dark">
              <Navbar.Brand className='NavTitle'>
                SUBSCRIPTION WEB-APP
              </Navbar.Brand>
          </Navbar>
        </div>
    )
}

export default NavBar;


