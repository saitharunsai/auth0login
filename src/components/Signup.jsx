import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button';
const Signup = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button variant="warning" onClick={() => loginWithRedirect()}>
        Signup
      </Button>
    )
  )
}

export default Signup;