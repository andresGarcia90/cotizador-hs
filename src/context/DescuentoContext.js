import { createContext, useState } from 'react';
export const DescuentoContext = createContext({
  aplicarDescuento: false,
  setAplicarDescuento: () => {},
});

export const DescuentoContextProvider = (props) => {
  const [descuento, setDescuento] = useState(false);

  const aplicarDescuentoHandler = () => {
    setDescuento(!descuento);
  };

  return (
    <DescuentoContext.Provider
      value={{
        aplicarDescuento: descuento,
        setAplicarDescuento: aplicarDescuentoHandler,
      }}
    >
      {props.children}
    </DescuentoContext.Provider>
  );
};

export default DescuentoContext;
