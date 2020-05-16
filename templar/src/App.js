import React, { useState } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Aside from './containers/Aside';
import Body from './containers/Body';
import Accounts from './containers/Accounts';

const App = () => {

  const [bodyWidth, setBodyWidth] = useState('');

  const setWidth = () => {
    if (bodyWidth === 'full') {
      setBodyWidth('');
    } else {
      setBodyWidth('full');
    }
  }

  return (
    <>
      <BrowserRouter>
        <Aside bodyWidth={bodyWidth} />
        <Body bodyWidth={bodyWidth} setWidth={setWidth}>
          <Switch>
            <Route path='/accounts' component={Accounts} />
          </Switch>
        </Body>
      </BrowserRouter>
    </>
  )
}

export default App;
