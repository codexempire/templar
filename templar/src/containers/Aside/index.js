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
        <>
            <div className={bodyWidth === 'full' ? 'aside-wrapper' : 'aside-wrapper show'}>
                <div className='logo-div' style={{ width: '100%', height: '4rem', display: 'flex', justifyContent: 'center' }}>
                    <img src={logo} style={{ flexShrink: '1', margin: '0 1rem' }} className='logo' />
                    <button
                        className='cancel-button'
                        style={{ backgroundColor: 'none', color: 'white', outline: 'none', position: 'absolute', left: '92%', border: 'none' }}
                        onClick={() => props.setWidth()}
                    >
                        x
                </button>
                </div>

                <SubMenu menuLinks={menuLinks} />
            </div>
            {bodyWidth === 'full' && <div onClick={() => props.setWidth()} className='sm-background' />}
        </>
    )
}

export default Aside;
