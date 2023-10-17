import './App.css';
import SignUp from './components/sign_up/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignIn from './components/sign_in/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import { Auth0Provider } from '@auth0/auth0-react';

const defaultTheme = createTheme();

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-gyask7ev7gthciy8.us.auth0.com"
        clientId="dmssAb6TBPsKIcj7dXyA8mWIJGyfH4fn"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
      </ThemeProvider>
      </Auth0Provider>
    </div>
  );
}

export default App;
