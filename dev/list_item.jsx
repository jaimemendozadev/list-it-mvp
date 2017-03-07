import React, {Component} from 'react';

function ListItem({item, cb, idx}) {
  return(
    <li onClick={(event) => cb(idx)}>{item}</li>
        
  )
}

export default ListItem;