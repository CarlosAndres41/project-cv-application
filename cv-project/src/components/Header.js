import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Header = () => {
    return (
        <header>
            <div className='logo-name'>
                <FontAwesomeIcon
                    icon={icon({ name: 'id-card', size: '2xl' })}
                    className='logo'
                />
                <h1 className='name'>CV Generator</h1>
            </div>
        </header>
    );
};

export default Header;
