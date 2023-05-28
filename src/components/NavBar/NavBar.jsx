import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
    return (
        <nav className='nav'>
            <div style={{marginLeft: "20px", textShadow: '0 1px 1px black'}}>
                <h1>EcoSound</h1>
            </div>
            <div>
                <ul className='navList'> 
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>collection</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;