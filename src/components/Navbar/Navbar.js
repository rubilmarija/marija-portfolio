import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);



    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_container bounce-in-top'>
                    <div className='navbar-links_logo'><FontAwesomeIcon icon={faCat} /></div>
                    <div>About me</div>
                    <div>Projects</div>
                    <div>Tools</div>
                    <div>Contact me</div>
                </div>
            </div>
            <div className='navbar-sign'>
                <button type='button'>Contact me</button>
            </div>
            <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <div className='navbar-links_logo'><FontAwesomeIcon icon={faCat} /></div>
                            <div>About me</div>
                            <div>Projects</div>
                            <div>Tools</div>
                            <div>Contact me</div>
                            <div className='navbar-menu_container-links-sign'>
                                <button type='button'>Contact me</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;