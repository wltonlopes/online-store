import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/Header';
import Switchers from './Switchers';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switchers />
      </BrowserRouter>
    );
  }
}

export default App;
