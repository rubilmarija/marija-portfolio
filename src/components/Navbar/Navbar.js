import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (

        <div>
            <FontAwesomeIcon icon={faCat} className="faCat" />
        </div>

    )
}

export default Navbar;