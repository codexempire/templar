import React from 'react';
import Body from '../Body';
import AccountsCard, { AddAccountsCard } from './AccounsCard';

import currentPng from '../../img/currentaccountlogo.svg'
import SavingsPng from '../../img/savingsaccountlogo.svg'
import taxPng from '../../img/taxaccountlogo.svg'

const Accounts = () => {
    return (
        <>
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

            <h1 className='title foot'>
                All transactions
            </h1>
        </>
    )
}

export default Accounts

