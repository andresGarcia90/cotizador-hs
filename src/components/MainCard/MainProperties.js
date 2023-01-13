import React from 'react';
import ItemWithImage from '../UI/ItemWithImage';

const MainProperties = (props) => {
  const properties = props.properties;
  return properties.map((property) => {
    return (
      <ItemWithImage
        title={property.tituloItem}
        success={property.valido}
        key={property.idItem}
      />
    );
  });
};

export default MainProperties;
