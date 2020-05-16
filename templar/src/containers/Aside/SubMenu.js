import React from 'react';
import downArrow from '../../img/blue-arrow.PNG';
import { Link } from 'react-router-dom';

const SubMenu = ({ menuLinks }) => {

    return (
        <div className='menu-container'>
            {
                menuLinks.map((menu, index) => {
                    return (
                        <div
                            style= {{
                                width: '100%',
                                height: 'max-content'
                            }}
                            key={menu.parent + index}
                        >
                            <>

                                {
                                    menu.parent && menu.dropdowns.length > 0 ? (
                                        <Link to={menu.page} className='parent-nav'
                                            onClick = {(e) => {
                                                const activeClass = document.getElementById('active');
                                                if (activeClass != null) activeClass.id = '';
                                                e.target.id ='active';
                                                const dropdowns = document.getElementById(menu.parent);
                                                if (dropdowns.style.display  === 'none') {
                                                    dropdowns.style.display = 'block'
                                                }  else {
                                                    dropdowns.style.display = 'none'
                                                }
                                            }}
                                        >
                                            { menu.parent }
                                            
                                            <img src={downArrow} style={{ flexShrink: '1', margin: '0 1rem' }} width='15' height='15' />
                                        </Link>
                                    ) : null
                                }

                                {
                                    menu.parent && menu.dropdowns.length < 1 ? (
                                        <Link to={menu.page} className='parent-nav'
                                            onClick = {(e) => {
                                                e.preventDefault();
                                                const activeClass = document.getElementById('active');
                                                if (activeClass != null) activeClass.id = '';
                                                e.target.id ='active';
                                            }}
                                        >
                                            { menu.parent }
                                        </Link>
                                    ) : null
                                }

                                <div id={menu.parent} style={{ display: 'none' }}>
                                    {
                                        menu.dropdowns.length > 0 ? (
                                            menu.dropdowns.map(dropdown => {
                                                return (
                                                    <a key={dropdown.name} href={dropdown.page} className='parent-nav' style={{ width: '50%', marginLeft: 'auto', justifyContent: 'left' }}>
                                                        { dropdown.name }
                                                    </a>
                                                )
                                            })
                                        ) : null
                                    }
                                </div>
                            </>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SubMenu;
