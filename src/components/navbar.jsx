import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';

function Navbars() {

	// Collapse isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div >
			<nav className='navy'>
            <div className='icons'>
                <Link to=''><i class="fa-brands fa-twitter"></i></Link>
            <Link to='/'><i class="fa-brands fa-instagram"></i></Link>
            
            <Link to=''><i class="fa-brands fa-facebook"></i></Link>
            
            </div>

            <div>
                <Link to='/'>Signup</Link>
                <button><Link to='/'>Login</Link></button>
            </div>
            </nav>
			

            <header>
            <Navbar  light expand="md" className='navs'>
				<NavbarBrand href="/" className='NavbarBrand'>EN ROUTE </NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						
						<NavItem>
							<NavLink href="/">Home</NavLink>
						</NavItem>

                        <NavItem>
							<NavLink href="/">About</NavLink>
						</NavItem>

                        <NavItem>
							<NavLink href="#">Contact</NavLink>
						</NavItem>

                        <NavItem>
							<NavLink href="#">Locations</NavLink>
						</NavItem>
						
					</Nav>
				</Collapse>
			</Navbar> 
            <section className='header-image'>
                <div className='tagline'>
                    <h1>Discover <span>The City</span></h1>
                </div>
                <div className='but'>
                <button><Link to=''>Add a bucket list</Link></button>
                </div>
                
            </section>
            </header>
		</div >
	);
}

export default Navbars;

