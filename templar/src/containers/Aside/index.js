import React from 'react';

import './Aside.css';
import SubMenu from './SubMenu';
import logo from '../../img/logo.PNG';

const menuLinks = [
    {
        parent: 'Account',
        page: '/accounts',
        icon: '',
        dropdowns: [
            {
                page: '',
                name: 'Current'
            }
        ]
    },
    {
        parent: 'Invoicing',
        page: '/invoice',
        icon: '',
        dropdowns: []
    },
    {
        parent: 'Account Management',
        page: '/accounts-management',
        icon: '',
        dropdowns: [
            {
                page: '',
                name: 'Current'
            }
        ]
    },
    {
        parent: 'My Profile',
        page: '/profile',
        icon: '',
        dropdowns: []
    },
    {
        parent: 'Security',
        page: '/security',
        icon: '',
        dropdowns: []
    },
    {
        parent: 'Support',
        page: '/support',
        icon: '',
        dropdowns: []
    },
]

const Aside = (props) => {


    const { bodyWidth } = props;
    return (
        <div className='aside-wrapper'
            style={
                bodyWidth === 'full' ? { left: '-15%' } : { transition: 'ease-in 1s'}
            }
        >
            <div className='logo-div' style={{ width: '100%', height: '4rem', display: 'flex', justifyContent: 'center' }}>
                <img src={logo} style={{ flexShrink: '1', margin: '0 1rem' }} width='150' height='40' />
            </div>

            <SubMenu menuLinks={menuLinks} />
        </div>
    )
}

export default Aside;
