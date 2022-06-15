import React, { Suspense } from 'react';
import Routing from './Routes';
import Loader from './shared/customLoader';

const App = () => {
  return <>
    <Suspense fallback={<Loader/>} >
      <Routing/>
    </Suspense>
  </>
}

export default App;
