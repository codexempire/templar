import React from 'react';
import Body from '../Body';
import AccountsCard, { AddAccountsCard } from './AccounsCard';

import currentPng from '../../img/current.PNG'
import SavingsPng from '../../img/savings.PNG'
import taxPng from '../../img/tax.PNG'

const Accounts = () => {
    return (
        <Body>
            <div style={{ margin: '3rem auto', width: '90%' }}>
                <h1 className='title'>
                    All accounts
                </h1>

                <div
                    style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', margin: '3rem auto', width: '95%' }}
                >
                    <AccountsCard page='/transactions' icon={currentPng} />
                    <AccountsCard page='/transactions' icon={SavingsPng} />
                    <AccountsCard page='/transactions' icon={taxPng} />
                    <AddAccountsCard />
                </div>
            </div>

            <h1 className='title' style={{ position: 'fixed', bottom: '0', width: '100%', zIndex: '2', borderBottom: 'none', borderTop: '1px solid #eee', paddingLeft: '4rem' }}>
                All transactions
            </h1>
        </Body>
    )
}

export default Accounts

