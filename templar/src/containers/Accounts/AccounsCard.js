import React from 'react';
import { Link } from 'react-router-dom';
import plus from '../../img/plus.PNG'

const AccountsCard = ({ page, icon }) => {
    return (
        <Link to={page} className='account-cards'>
            <div
                style={{
                    padding: '1.5rem 2rem',
                    width: '80%'
                }}
            >
                <h3
                    style={{
                        margin: '0',
                        fontSize: '1rem',
                        width: '100%',
                        textAlign: 'left',
                    }}
                >Current account</h3>
                <div
                    style={{
                        marginBottom: '2rem',
                        fontSize: '.7rem',
                        fontWeight: '300',
                        width: '100%',
                        textAlign: 'left',
                    }}
                >57797757678</div>
                <div>#2,650,234.96</div>
            </div>

            <div style={{ width: '20%', padding: '1rem 0' }}>
                <img src={icon} width='50' height='50' />
            </div>
        </Link>
    )
}

export const AddAccountsCard = () => {
    return (
        <div className='account-cards image' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'rgba(225, 225, 225, 0.1)', color: '#bbb' }}>
            <img src={plus} width='50' height='50' />
            <p>Add a new account</p>
        </div>
    )
}

export default AccountsCard;
