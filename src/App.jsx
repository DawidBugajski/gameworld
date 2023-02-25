import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'routes/Main';
import Page from 'routes/Page';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/page' element={<Page />} />
      </Routes>
    </div>
  );
};

export default App;
