import PropTypes from 'prop-types';
import { createContext, useContext } from 'react';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default function AuthProvider({ children, auth }) {
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
  auth: PropTypes.object.isRequired,
};
