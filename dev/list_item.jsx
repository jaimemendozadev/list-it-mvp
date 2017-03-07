import React, {Component} from 'react';

function ListItem({item, handler, key}) {
  return(
    <li onClick={(event) => handler(key)}>{item}</li>
        
  )
}

export default ListItem;