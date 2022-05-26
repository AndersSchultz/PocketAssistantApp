import React from 'react';
import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import './index.css';
import App from "./App"
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { RecoilRoot } from 'recoil'


const activeChainId = ChainId.Polygon;
const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThirdwebProvider desiredChainId={activeChainId}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </ThirdwebProvider>
    </StyledEngineProvider>
  </React.StrictMode>
)