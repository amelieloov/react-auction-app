import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext';
import UIProvider from './contexts/UIContext';
import AuctionProvider from './contexts/AuctionContext';
import BidProvider from './contexts/BidContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <AuctionProvider>
          <BidProvider>
            <UIProvider>
              <App />
            </UIProvider>
          </BidProvider>
        </AuctionProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
