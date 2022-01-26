import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from "react-router-dom";
import TemaConfiguracion from './temaConfiguracion.js';

import Principal from './components/_layaout/Principal';

function App() {
  return (
    <ThemeProvider theme={TemaConfiguracion}>
      <BrowserRouter>
        <Principal />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
