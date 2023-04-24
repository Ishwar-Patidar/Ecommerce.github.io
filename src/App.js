
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ProductContext } from './Ecommerce site11April/Componants/EcommerseContext/ApIContext/ProductContext';
import EcContext from './Ecommerce site11April/Componants/EcommerseContext/EcContext';
import Index from './Ecommerce site11April/Index';
function App() {
  return (

    <React.Fragment>
      <ProductContext>
        <EcContext>
          <BrowserRouter>
            <Index />
          </BrowserRouter>
        </EcContext>
      </ProductContext>
    </React.Fragment>

  )
}

export default App;
