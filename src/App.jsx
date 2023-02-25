import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Page } from 'routes';
import { Content, SideBar } from 'components';

const App = () => {
  return (
    <div className='flex'>
      <SideBar />
      <Content>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/page' element={<Page />} />
        </Routes>
      </Content>
    </div>
  );
};

export default App;
