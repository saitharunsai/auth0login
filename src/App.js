import 'rsuite/lib/styles/themes/dark/index.less';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Navbar.jsx';



function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Home />
    </>
  );
}

export default App;