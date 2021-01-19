import PropTypes from 'prop-types';
import { useState, createContext, useContext } from 'react';

const TempDataContext = createContext();
export const useTempDataContext = () => useContext(TempDataContext);

export default function TempDataProvider({ children }) {
  const [tempData, setTempData] = useState({});
  return (
    <TempDataContext.Provider value={{ tempData, setTempData }}>
      {children}
    </TempDataContext.Provider>
  );
}

TempDataProvider.propTypes = {
  children: PropTypes.node,
};
