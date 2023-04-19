
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import EcContext from './Ecommerce site11April/Componants/EcommerseContext/EcContext';
import Index from './Ecommerce site11April/Index';
function App() {
  return (

    <EcContext>
      <React.Fragment>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </React.Fragment>
    </EcContext>

  )
}

export default App;
