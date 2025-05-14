import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';            
import Global from './styles/global.js';
import { Home } from './pages/home.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <Home />
    </ThemeProvider>
  </StrictMode>,

);
