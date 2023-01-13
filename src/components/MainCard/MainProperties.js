import React from 'react';
import ItemWithImage from '../UI/ItemWithImage';



const MainProperties = (props) => {
  console.log(props);
  const properties = props.properties;
  return (

    properties.map(property => {
      return <ItemWithImage title={property.tituloItem} success={property.valido}/>
    })

  );
}

export default MainProperties;
